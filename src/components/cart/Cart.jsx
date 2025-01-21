import React from 'react'
import {  ShoppingCart } from 'lucide-react';
import {  useSelector } from 'react-redux';
import { selectCart } from '../../reducer/AmazonSlice';
import CartItem from './CartItem';



export default function Cart() {
    const cartItems = useSelector(state=>selectCart(state))
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div className=" mx-auto">
      <div className="bg-white flex-wrap md:w-[70vw] flex gap-2 rounded-lg shadow">
      <div >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
            </div>
           
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <CartItem key={item._id}  item={{...item.product}} count={item.count} isSelected={item.isSelected} _id={item._id}/>
          ))}
        </div>
      </div>
        <div className="px-6 py-4  bg-white-50 rounded-b-lg">
          <div className="flex justify-between items-center">
       
            <div className="text-right">
              <p className="text-lg font-medium text-gray-900">
                Subtotal ({cartItems.reduce((acc, item) => acc + item.count, 0)} items):
                <span className="font-bold ml-2">
                  ₹{cartItems.reduce((acc, item) =>item.isSelected ?  acc + (item.product.price * item.count) : acc, 0).toFixed(2)}
                </span>
              </p>
              <button className="mt-2 w-48 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
