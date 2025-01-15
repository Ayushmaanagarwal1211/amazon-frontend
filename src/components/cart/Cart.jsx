import React from 'react'
import { Minus, Plus, ShoppingCart, Gift } from 'lucide-react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../reducer/AmazonSlice';
import CartItem from './CartItem';


export default function Cart() {
    const cartItems = useSelector(state=>selectCart(state))
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white flex gap-2 rounded-lg shadow">
        {/* Header */}
      <div >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Deselect all items
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
      </div>

        {/* Cart Items */}

        {/* Footer */}
        <div className="px-6 py-4  bg-white-50 rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-600">
                Part of your order qualifies for FREE Delivery
              </span>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-gray-900">
                Subtotal ({cartItems.reduce((acc, item) => acc + item.count, 0)} items):
                <span className="font-bold ml-2">
                  ₹{cartItems.reduce((acc, item) => acc + (item.price * item.count), 0).toFixed(2)}
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
  <Footer/>
    </>
  )
}
