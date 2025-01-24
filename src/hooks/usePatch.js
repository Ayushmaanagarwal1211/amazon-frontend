import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setCartData, toggleLoading } from '../reducer/AmazonSlice'
import refreshToken from './refreshToken'

export function authConfig(method,url,body,token){
  return {
    method,url,data:body,headers:{
      Authorization: `Bearer ${token}`, // Make sure token is passed correctly in the headers
    }
  }
}

async function makepatchRequest(url,body){
  const token = JSON.parse(localStorage.getItem("token"))

  return await  axios.patch( url,body,{
    headers: {
      Authorization: `Bearer ${token}`, // Make sure token is passed correctly in the headers
    },
  })
}
export default function usePatch() {
    const dispatch = useDispatch()
    return async function (url,body){
     try{
       const response = await makepatchRequest("http://localhost:5000/" + url,body)
        // .then(res=>dispatch(setCartData(res.data)))
        dispatch(setCartData(response.data))
      }
      catch(err){
        // console.log(err)
        await refreshToken(err)
        const response = await   makepatchRequest("http://localhost:5000/" + url,body)
        dispatch(setCartData(response.data))

      }
         
    }
}
