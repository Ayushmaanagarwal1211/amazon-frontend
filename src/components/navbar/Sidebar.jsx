import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../reducer/AmazonSlice'
import Sections from './Sections'
// import {} from "react-icons/fa6"
export default function Sidebar() {
  const dispatch = useDispatch()
  return (
    <div className='w-[30vw] text-white top-0  fixed  transition-all duration-200 bg-[#ffffff] h-[100vh] z-[100] ' style={{height:"100vh"}}>
        <div className='h-[70px] justify-center relative items-center flex bg-[#232f3e] text-2xl font-bold '>
                Hello Signin,
        <div onClick={()=>dispatch(toggleSidebar())} className='cross absolute   right-[-40px] text-black'>X</div>
        </div>
        <div className='p-5 text-black bg-white '>
            <Sections heading={"Trending"} items={["BEst Sellers","new Releases","Movers and Shakers"]}/>
            <Sections heading={"Digital Content and Devices"} items={["Echo and Alexa","Fire Tv","Kindle Readers ","Amazon Prime Music"]}/>

        </div>
    </div>
  )
}
