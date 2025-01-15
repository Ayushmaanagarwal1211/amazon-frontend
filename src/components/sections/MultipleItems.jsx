import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

export default function MultipleItems({heading,images}) {
    const [isShow,setIsShow]= useState(false)
    const ref = useRef()
    function handleScrollLeft(){
        ref.current.scrollTo({
            left: ref.current.scrollLeft - 500, // Scroll left by 100px
            behavior: 'smooth' // Smooth scrolling effect
          });
    }
    function handleScrollRight(){
        ref.current.scrollTo({
            left: ref.current.scrollLeft + 500, // Scroll left by 100px
            behavior: 'smooth' // Smooth scrolling effect
          });
    }
  return (
    <div className='w-[100%] bg-white   p-6 relative  mt-8' onMouseEnter={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>
        <div className='p-3 mb-4 items-center  flex gap-3'>
            <h1 className='text-2xl font-bold'>{heading}</h1>
            <a>See All Details</a>
        </div>
        <div ref={ref} className= {`${isShow?"overflow-scroll":"overflow-hidden"} transition-all duration-150 ease-out flex  w-[100%]  gap-6`}>
            {
                images.map(data=><img src={data} className='w-[200px] h-[200px]'/>)
            }
        </div>
       {isShow &&  <div onClick={handleScrollLeft} className='left-side-arrows absolute flex justify-center items-center h-[60px] w-[40px] bg-gray-300 left-0  top-[50%]  '>
            <FaArrowLeft/>
        </div>}
    {isShow &&     <div onClick={handleScrollRight} className='right-side-arrow  h-[60px] w-[40px] absolute bg-gray-300 flex justify-center items-center right-0 top-[50%]'>
            <FaArrowRight/>
        </div>}
    </div>
  )
}
