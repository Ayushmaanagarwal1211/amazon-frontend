import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import axios from 'axios';

  async function getProducts(){
   return  axios.get("http://localhost:5000/products").then(res=>setData(res.data))
  }
  const fetchData = getProducts()
export default function ProductSection() {
  // const [data,setData]=  useState([])
  const data = use(fetchData())
  // useEffect(()=>{
  //    axios.get("http://localhost:5000/products").then(res=>setData(res.data))
  // },[])
  return (
    <>
    <div  className='bg-white mt-5 p-4'>

    <h1 className='font-bold text-2xl mb-3'>Products</h1>
    <div className='w-[100%] flex flex-row flex-wrap justify-around'>

    {
       data.map((product)=><ProductCard product={product}/>)
    }
    </div>
    </div>
    </>
  )
}
