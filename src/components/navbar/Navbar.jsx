import React from 'react'
import amazon_clone from '../../images/amazon-clone.png'
import Input from './Input'
import Countries from './Countries'
import AccountAndList from './AccountAndList'
import ReturnsAndOrders from './ReturnsAndOrders'
import Cart from './Cart'
// imporfrom 'react-icons/fa6'
export default function Navbar() {
  return (
    <div className='bg-[#131921] h-[50px] w-[100vw] z-[1] flex ' >
      <div className='logo flex-1 flex items-center'><img className='h-[80%]' src={amazon_clone}></img></div>
      <div className="flex-1 flex flex-col justify-center">
          <p className='text-gray-300 text-sm'>Delevering to RAmpur</p>
          <p className='text-white text-sm'>Update Location</p>
      </div>
      <div className="flex-4 w-[45%] rounded-lg"><Input/></div>
      <div className="flex-1 text-white justify-center items-center flex"><Countries/></div>
      <div className="flex-1 text-white justify-center items-center flex"><AccountAndList/></div>
      <div className="flex-1 text-white justify-center items-center flex"><ReturnsAndOrders/></div>
      <div className="flex-1  text-white justify-center items-center flex"><Cart/></div>
</div>
  )
}
