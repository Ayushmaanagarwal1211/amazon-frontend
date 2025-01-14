import React from 'react'
import Card from '../Card'
import SigninCard from '../SigninCard'

export default function Section_1() {
  return (
    <div className='w-[100%] mt-8 flex gap-6 h-[450px] justify-center'>
    
            <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg"]}/>
            <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/JanART/BTF/PCQC/1x/Adidas_372x232._SY116_CB552679973_.jpg"]}/>
            <Card heading={"Up to 75% off | Electronics & accessories"} images={["https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_CC_379x304_CEPC._SY304_CB552821024_.jpg"]}/>
            <SigninCard/>
        </div>
  )
}
