import React, { useEffect, useState } from 'react'
import Card from '../Card'
import SigninCard from '../SigninCard'

export default function Header() {
    const images = ["https://images-eu.ssl-images-amazon.com/images/G/31/Events/img25/janART25/H1/JanART-25-PC_Hero_NTA_Main_2X._CB552659620_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2025/Jan/JanArt/Event/Watches/15-1._CB552601313_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/thomsoja/Grocery/JanART25/GW/Unrec_PC_Hero_3000x1200._CB553031440_.jpg"
    ]
    const [currImage, setCurrImage] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrImage(prev=>(prev+1)%images.length)
        },2000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div className='flex  relative gap-0  h-[80vh] flex-row w-[100%] overflow-hidden'>
        {
            images.map((data,index)=><img  src={data} className={`absolute top-0 `} style={{left:`${(index-currImage)*100}%`}}></img>)
        }
        <div className='w-[100%] absolute bottom-0 p-2 flex gap-6 justify-center'>

        <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg"]}/>
        <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg"]}/>
        <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg"]}/>
        <SigninCard/>
        </div>

    </div>
  )
}
