import React from 'react'
import { useSelector } from 'react-redux'
import { selectModal } from '../reducer/AmazonSlice'

export default function Modal() {
  return (


   <div  className={`absolute w-auto p-4 h-auto top-[50px] z-[100] bg-white`}>
        <div className="p-6 flex flex-col items-center gap-3 border-b border-gray-200">
          <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] py-2.5 px-4 rounded-lg font-medium text-black transition-colors">
            Sign in
          </button>
          <p className="text-sm">
            New customer?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
              Start here.
            </a>
          </p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h2 className="font-bold text-lg mb-3">Your Lists</h2>
            <ul className="space-y-2">
              {[
                'Create a Wish List',
                'Wish from Any Website',
                'Baby Wishlist',
                'Discover Your Style',
                'Explore Showroom',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Your Account</h2>
            <ul className="space-y-2">
              {[
                'Your Account',
                'Your Orders',
                'Your Wish List',
                'Your Recommendations',
                'Your Prime Membership',
                'Your Prime Video',
                'Your Subscribe & Save Items',
                'Memberships & Subscriptions',
                'Your Seller Account',
                'Manage Your Content and Devices',
                'Register for a free Business Account',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  
  )
}
