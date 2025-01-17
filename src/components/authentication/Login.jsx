import React, { useState } from 'react'
import {Link} from 'react-router'
export default function Login() {
    const [email,setEmail] = useState("")
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-4">
    {/* Amazon Logo */}
    <div className="mb-4">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
        alt="Amazon Logo" 
        className="h-8 object-contain"
      />
      <span className="text-[#666] text-sm">.in</span>
    </div>

    {/* Sign In Box */}
    <div className="w-[350px] p-5 border border-gray-300 rounded-lg">
      <h1 className="text-3xl font-normal mb-4">Sign in</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          Email or mobile phone number
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-1.5 border border-gray-400 rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,0.5)] focus:outline-none"
        />
      </div>

      <button className="w-full bg-[#f0c14b] border border-[#a88734] rounded py-1.5 px-4 hover:bg-[#f4d078] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f0c14b] mb-4">
        Continue
      </button>

      <p className="text-xs text-gray-600 mb-4">
        By continuing, you agree to Amazon's{' '}
        <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
          Conditions of Use
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
          Privacy Notice
        </a>
        .
      </p>

      <div className="flex items-center text-sm text-blue-600 hover:text-orange-600 cursor-pointer group mb-4">
        {/* <ChevronDown className="w-4 h-4 group-hover:text-orange-600" /> */}
        <span className="hover:underline ml-1">Need help?</span>
      </div>
    </div>

    {/* Divider */}
    <div className="w-[350px] my-4 relative">
      <div className="absolute w-full border-t border-gray-300"></div>
      <div className="relative -top-[10px] text-xs text-gray-600 text-center">
        <span className="bg-white px-2">New to Amazon?</span>
      </div>
    </div>

    {/* Create Account Button */}
      <Link to={'/register'} >
    <button className="w-[350px] bg-gray-100 border border-gray-300 rounded py-1.5 px-4 hover:bg-gray-200 mb-4">
      Create your Amazon account
    </button>
      </Link>

    {/* Business Link */}
    <div className="mt-4 text-sm">
      <span className="text-gray-700 mr-2">Buying for work?</span>
      <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
        Shop on Amazon Business
      </a>
    </div>

    {/* Footer */}
    <div className="mt-8 w-[350px] border-t border-gray-300 pt-4">
      <div className="flex justify-center space-x-4 text-xs text-blue-600">
        <a href="#" className="hover:text-orange-600 hover:underline">Conditions of Use</a>
        <a href="#" className="hover:text-orange-600 hover:underline">Privacy Notice</a>
        <a href="#" className="hover:text-orange-600 hover:underline">Help</a>
      </div>
      <div className="text-xs text-gray-600 text-center mt-2">
        © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  </div>
  )
}
