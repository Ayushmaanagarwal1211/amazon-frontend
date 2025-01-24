import React, { useEffect, useState,use } from 'react'
import ProductCard from '../ProductCard';
import axios from 'axios';

  async function getProducts(){
   return  axios.get("http://localhost:5000/products").then(res=>res.data)
  }
  const fetchData = getProducts()
export default function ProductSection() {
  const data = use(fetchData)
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
