import React, { useState } from 'react'

export default function MultipleItems({heading,images}) {
    const [isShow,setIsShow]= useState(false)

  return (
    <div className='w-[100%] bg-white  p-6 relative  mt-8' onMouseEnter={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>
        <div className='p-3 mb-4 items-center  flex gap-3'>
            <h1 className='text-2xl font-bold'>{heading}</h1>
            <a>See All Details</a>
        </div>
        <div className= {`${isShow?"overflow-scroll":"overflow-hidden"} flex  w-[100%]  gap-6`}>
            {
                images.map(data=><img src={data} className='w-[200px] h-[200px]'/>)
            }
        </div>
       {isShow &&  <div className='left-side-arrows absolute h-[100px] w-[80px]  '>
            {">"}
        </div>}
    {isShow &&     <div className='right-side-arrow  h-[100px] w-[80px] absolute'>
            {"<"}
        </div>}
    </div>
  )
}
