import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setCartData } from '../reducer/AmazonSlice'

export default function useGet(url) {
    const user = useSelector(state=>selectUser(state))
    const dispatch = useDispatch()
    return function (url){
      const token = JSON.parse(localStorage.getItem("token"))
      axios.get(url,{
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }).then(res=> dispatch(setCartData(res.data)))
        
    }
}
