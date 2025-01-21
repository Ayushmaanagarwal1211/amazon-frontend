import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setCartData, toggleLoading } from '../reducer/AmazonSlice'

function authConfig(method,url,body,token){
  return {
    method,url,data:body,headers:{
      Authorization: `Bearer ${token}`, // Make sure token is passed correctly in the headers
    }
  }
}

export default function usePatch() {
    const dispatch = useDispatch()
    return function (url,body){
      dispatch(toggleLoading(true))
     const token = JSON.parse(localStorage.getItem("token"))
        axios.patch("http://localhost:5000/" + url,body,{
           headers: {
             Authorization: `Bearer ${token}`, // Make sure token is passed correctly in the headers
           },
         })
         .then(res=>{dispatch(setCartData(res.data));})
         .catch(err=>{
          const error =err?.response?.data?.message
            if(error !== "jwt expired"){
              return 
            }
            const refresh_token = JSON.parse(localStorage.getItem("refresh_token"))
            axios.request(authConfig("post","http://localhost:5000/auth/refresh-token",{refresh_token},refresh_token)).then(res=>{
              const new_token = res.data.new_token
              localStorage.setItem("token",JSON.stringify(new_token))
              return new_token
            }).then(res=>{
              axios.patch("http://localhost:5000/" + url,body,{
                headers: {
                  Authorization: `Bearer ${res}`, // Make sure token is passed correctly in the headers
                },
              }).then(res=>{dispatch(setCartData(res.data));})
            })
         })
         .finally(()=>{
          dispatch(toggleLoading(false))
        })
    }
}
