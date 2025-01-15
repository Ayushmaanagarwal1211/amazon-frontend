import React from 'react'
import amazon_clone from '../../images/amazon-clone.png'
import Input from './Input'
import Countries from './Countries'
import AccountAndList from './AccountAndList'
import ReturnsAndOrders from './ReturnsAndOrders'
import Cart from '../cart/Cart'
import { Link } from 'react-router'
// imporfrom 'react-icons/fa6'
export default function Navbar() {
  return (
    <div className='bg-[#131921] h-[auto] min-h-[50px] gap-3  w-[100vw] z-[1] flex flex-wrap justify-around' >
      <div className='logo w-[120px] justify-center  flex items-center'><img className='h-[40px] w-[100px]' src={amazon_clone}></img></div>
      <div className="w-[150px]  flex flex-col justify-center flex-wrap">
          <p className='text-gray-300 text-sm'>Delevering to RAmpur</p>
          <p className='text-white text-sm'>Update Location</p>
      </div>

      <div className=" w-[50%] rounded-lg max-md:w-[90vw] max-md:m-auto"><Input/></div>
      <div className='flex w-[30%] justify-around  max-sm:w-[100vw] flex-wrap gap-2 max-lg:w-[100vw] max-lg:p-3'>
      <div className="  text-white justify-center items-center flex"><Countries/></div>
      <div className=" text-white justify-center items-center flex relative overflow-visible"><AccountAndList/></div>
      <div className="  text-white justify-center items-center flex"><ReturnsAndOrders/></div>
      <div className="  text-white justify-center items-center flex"><Link to="/cart">Cart</Link></div>
      </div>
</div>
  )
}
