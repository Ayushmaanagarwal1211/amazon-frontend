import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { authConfig } from './usePatch'

export default async  function refreshToken(err) {
  console.log(err,'error')
    const error =err?.response?.data?.message
            if(error !== "jwt expired"){
              return 
            }
            const refresh_token = JSON.parse(localStorage.getItem("refresh_token"))
            const res = await axios.request(authConfig("post","http://localhost:5000/auth/refresh-token",{refresh_token},refresh_token))
              const new_token = res.data.new_token
              localStorage.setItem("token",JSON.stringify(new_token))
              return new_token
       

}
