import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setCartData } from '../reducer/AmazonSlice'
import refreshToken from './refreshToken'

async function makeGetRequest(url){
  const token = JSON.parse(localStorage.getItem("token"))

  return await axios.get(url,{
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  })
}
export default  function useGet() {
    return async function (url){
      try{
          const response = await makeGetRequest(url)
          return response
      }catch(err){
          try{
            await refreshToken(err)
            const res = await makeGetRequest(url)
            return res
          }catch(err){
            return err
          }
      }
    }
}
