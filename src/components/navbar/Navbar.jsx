import React, { useEffect, useState } from 'react'
import amazon_clone from '../../images/amazon-clone.png'
import Input from './Input'
import Countries from './Countries'
import AccountAndList from './AccountAndList'
import ReturnsAndOrders from './ReturnsAndOrders'
import Cart from '../cart/Cart'
import { Link } from 'react-router'
import { FaLocationDot } from 'react-icons/fa6'
import cart from '../../images/cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, setCartData, togglePopup } from '../../reducer/AmazonSlice'
import usePatch from '../../hooks/usePatch'
import useGet from '../../hooks/useGet'
import { ToggleRight } from 'lucide-react'
// imporfrom 'react-icons/fa6'
export default function Navbar() {
  const cartItems = useSelector(state=>selectCart(state))
  const get = useGet()
  useEffect(()=>{
    get("http://localhost:5000/cart")
  },[])
  const dispatch = useDispatch()
  return (
    <div className='bg-[#131921] sticky top-0 z-[99] px-3 max-md:h-[auto] h-[60px] py-1 min-h-[50px]   w-[100vw]  flex flex-wrap gap-1 justify-between' >
      <div className='logo w-[auto] justify-center  flex items-center'><img className='h-[40px] w-[100px]' src={amazon_clone}></img></div>
      <div className="w-[auto]  flex flex-col justify-center flex-wrap">
          <p className='text-gray-300 text-[12px]'>Delevering to RAmpur</p>
          <p className=' text-[14px] font-bold text-white flex gap-1 items-center'><FaLocationDot color='white'/>Update Location</p>
      </div>

      <div className=" w-[60%] h-[100%] rounded-lg max-md:w-[90vw] max-md:m-auto"><Input/></div>
      <div className='flex w-[auto] justify-around  max-sm:w-[100vw] flex-wrap gap-2 max-lg:w-[100vw] max-lg:p-3'>
      <div className="  text-white justify-center items-center flex"><Countries/></div>
      <div onMouseLeave={()=>dispatch(togglePopup(false))}  className=" text-white justify-center items-center flex relative overflow-visible"><AccountAndList/></div>
      <div className="  text-white justify-center items-center flex"><ReturnsAndOrders/></div>
      <div className="  text-white justify-center items-center flex "><Link to="/cart" className='flex relative gap-1 justify-center items-center'><h1 className='absolute font-bold  left-[20px] bottom-[20px]  text-[#f08804]'>{cartItems?.length}</h1><img className='h-[50px] w-[50px]' src={cart}/>Cart</Link></div>
      </div>
</div>
  )
}
