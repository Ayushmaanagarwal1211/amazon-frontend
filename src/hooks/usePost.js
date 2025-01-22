import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setCartData } from '../reducer/AmazonSlice'
import refreshToken from './refreshToken'


async function postRequest(url,body){
  const token = JSON.parse(localStorage.getItem("token"))
    return axios.post(url,body,{headers :  {
      Authorization: `Bearer ${token}`,
      }})
}

export default function usePost() {
    const dispatch = useDispatch()
     return async function (url,body){
      try{
        const response = await postRequest(url,body)
         dispatch(setCartData(response.data))
      }
      catch(err){
        await refreshToken(err)
        postRequest(url,body) 
          .then(res=>{dispatch(setCartData(res.data));})  
        }
  
     }  
   
    
}
