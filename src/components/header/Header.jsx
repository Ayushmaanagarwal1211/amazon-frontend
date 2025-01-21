import React, { useEffect, useState } from 'react'
import Card from '../Card'
import SigninCard from '../SigninCard'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6'
import './header.css'
const images = ["https://images-eu.ssl-images-amazon.com/images/G/31/Events/img25/janART25/H1/JanART-25-PC_Hero_NTA_Main_2X._CB552659620_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2025/Jan/JanArt/Event/Watches/15-1._CB552601313_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/thomsoja/Grocery/JanART25/GW/Unrec_PC_Hero_3000x1200._CB553031440_.jpg"
]
export default function Header() {
    const [currImage, setCurrImage] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrImage(prev=>(prev+1)%images.length)
        },2000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    function handleChangeImage(toSet){
        setCurrImage(prev=>(toSet)%images.length)
    }

  return (
    <div className='flex  relative gap-0 min-h-[84vh]  h-[84vh] max-lg:h-auto  flex-row w-[100%] overflow-x-hidden overflow-y-hidden max:lg-overflow-y-visible  '>
        <div className='right-arrow absolute  right-0 z-[90] top-[30%] max-lg:top-[50px] flex justify-center items-center '>{<FaArrowRight onClick={()=>handleChangeImage(currImage+1)} size={"2rem"}/>}</div>
        <div className='right-arrow absolute  left-0 z-[90] top-[30%] max-lg:top-[50px] flex justify-center items-center '>{<FaArrowLeft onClick={()=>handleChangeImage(currImage-1)} size={"2rem"}/>}</div>
        {
            images.map((data,index)=><img  src={data} className={` ${currImage==index ? "animation":""} absolute top-0 transition-all duration-200 ease-in-out`} style={{left:`${(index-currImage)*100}%`}}></img>)
        }
        <div className='w-[100%] h-auto  !important relative top-[40%] max-lg:top-[100px] max-lg:flex-wrap  p-2 flex gap-6 justify-between px-4 '>

        <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg"]}/>
        <Card heading={"Up to 5% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg"]}/>
        <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg"]}/>
        <SigninCard/>
        </div>

    </div>
  )
}
