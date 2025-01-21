import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import axios from 'axios';

  
export default function ProductSection() {
  const [data,setData]=  useState([])
  useEffect(()=>{
     axios.get("https://amazon-backend-1-mwv3.onrender.com/products").then(res=>setData(res.data))
  },[])
  return (
    <>
    <div  className='bg-white mt-5 p-4'>

    <h1 className='font-bold text-2xl mb-3'>Products</h1>
    <div className='w-[100%] flex flex-row justify-around'>

    {
      data && data?.map((product)=><ProductCard product={product}/>)
    }
    </div>
    </div>
    </>
  )
}
