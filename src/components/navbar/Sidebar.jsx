import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSidebar, toggleSidebar } from '../../reducer/AmazonSlice'
import Sections from './Sections'
const sidebarData = [
  {
    heading : "Trending",
    items : ["BEst Sellers","new Releases","Movers and Shakers"]
  },
  {
    heading : "Digital Content and Devices",
    items : ["Echo and Alexa","Fire Tv","Kindle Readers ","Amazon Prime Music"],
    children : [
        {
          heading : "Trending",
          items : ["BEst Sellers","new Releases","Movers and Shakers"]
        }
      ]
    
  }
]

export default function Sidebar() {
  const dispatch = useDispatch()
  const isSideBarVisible = useSelector(state=>selectSidebar(state))
  const [itemIndex, setItemIndex] = useState(null)

  function handleSetItemIndex(index){
    setItemIndex(index)
  }

  return (
  isSideBarVisible ?   <div className=' sidebar-animation  text-white top-0  fixed  bg-[#ffffff] h-[100vh] z-[100] ' style={{height:"100vh",width:"20vw"}}>
        <div className='h-[60px] justify-center relative items-center flex bg-[#232f3e] text-2xl font-bold '>
                Hello Signin,
        <div onClick={()=>dispatch(toggleSidebar())} className='cross absolute   right-[20px] text-white font-normal cursor-pointer z-[100]'>X</div>
        </div>
        <div className=' text-black bg-white '>
            {
              sidebarData.map((data,index)=><Sections setItemIndex={handleSetItemIndex} index={itemIndex} itemIndex={index} item={data} children={data.children} />)
            }
        </div>
    </div> : <></>
  )
}
