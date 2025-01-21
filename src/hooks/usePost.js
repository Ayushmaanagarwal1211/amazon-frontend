import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setCartData } from '../reducer/AmazonSlice'
function authConfig(method,url,body,token){
    return {
      method,url,data:body,headers:{
        Authorization: `Bearer ${token}`, // Make sure token is passed correctly in the headers
      }
    }
  }

async function postRequest(url,body,headers){
    return axios.post(url,body,headers)
}

export default function usePost() {
    const dispatch = useDispatch()
     return function (url,body){
        const token = JSON.parse(localStorage.getItem("token"))

         if(url){
          return postRequest(url,body,{headers :  {
            Authorization: `Bearer ${token}`,
            }})
             .then(res=>{console.log(res.data);dispatch(setCartData(res.data));})
             .catch(err=>{
                const error =err?.response?.data?.message
                  if(error !== "jwt expired"){
                    return 
                  }
                  const refresh_token = JSON.parse(localStorage.getItem("refresh_token"))
                  axios.request(authConfig("post","https://amazon-backend-1-mwv3.onrender.com/auth/refresh-token",{refresh_token},refresh_token)).then(res=>{
                  const new_token = res.data.new_token
                  localStorage.setItem("token",JSON.stringify(new_token))
                  return new_token
                  })
                  .then(res=>{
                    postRequest(url,body,{headers :  {
                      Authorization: `Bearer ${res}`,
                      }}) 
                    .then(res=>{dispatch(setCartData(res.data));})  
                  })
               })
         }
  
     }  
   
    
}
