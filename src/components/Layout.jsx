import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { selectSidebar, toggleSidebar } from '../reducer/AmazonSlice'

export default function Layout() {
const sidebar = useSelector(state=>selectSidebar(state))
  const dispatch = useDispatch()
  return (
    <>
        {sidebar && <div className='z-[99] bg-black opacity-80 fixed h-[100vh] w-[100vw]' onClick={()=>dispatch(toggleSidebar())}></div>}

    <Navbar/>
        <Outlet/>
    <Footer/>
    </>
  )
}
