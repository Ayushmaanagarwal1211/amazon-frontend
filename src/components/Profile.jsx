import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, selectUser, setUser } from '../reducer/AmazonSlice'
import {  useLocation, useNavigate } from 'react-router'

export default function Profile() {
    const navigate = useNavigate()
    const user = useSelector(state=>selectUser(state))
    function handleLogout(){
        localStorage.removeItem("refresh_token")
        localStorage.removeItem('token')
        navigate('/',{replace:true})
    }
    // <Navigate/>
  return (
    <>
        <h1>{user.name}</h1>
        <button onClick={handleLogout} className='h-[100px]'>Logout</button>
    </>
  )
}
