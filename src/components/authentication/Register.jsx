import React, { useState } from 'react'
import { Link } from 'react-router';
import axios from 'axios';
export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword : ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      async function handleSubmit(){
        if(formData.password !== formData.confirmPassword){
          return 
        }
        const data = {name:formData.name, password:formData.password, email:formData.email}

        await axios.post('https://amazon-backend-1-mwv3.onrender.com/auth',{
          data
        })
      }

      return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-4">
          <div className="mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
              alt="Amazon Logo" 
              className="h-8 object-contain"
            />
            <span className="text-[#666] text-sm">.in</span>
          </div>
    
          <div className="w-[350px] p-5 border border-gray-300 rounded-lg">
            <h1 className="text-3xl font-normal mb-4">Create Account</h1>
            
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="First and last name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border border-gray-400 rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,0.5)] focus:outline-none"
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Email
              </label>
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-3 py-1.5 border border-l-0 border-gray-400 rounded-r focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,0.5)] focus:outline-none"
                />
              </div>
            </div>
    
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border border-gray-400 rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,0.5)] focus:outline-none"
              />
              <div className="flex items-center mt-1 text-xs">
                <span>Passwords must be at least 6 characters.</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="At least 6 characters"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border border-gray-400 rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,0.5)] focus:outline-none"
              />
              <div className="flex items-center mt-1 text-xs">
                <span>Passwords must be at least 6 characters.</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
            </p>
    
            <button onClick=  {handleSubmit} className="w-full bg-[#FFD814] border border-[#FCD200] rounded-lg py-1.5 px-4 hover:bg-[#F7CA00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCD200] mb-4">
              Submit
            </button>
    
            <div className="mb-4">
              <p className="text-sm">
                Buying for work?{' '}
                <a href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
                  Create a free business account
                </a>
              </p>
            </div>
    
            <div className="mb-4">
              <p className="text-sm">
                Already have an account?{' '}
                <Link to={'/login'} className="text-[#0066c0] hover:text-[#c45500] hover:underline">
                  Submit
                </Link>
              </p>
            </div>
    
            <p className="text-xs text-gray-600">
              By creating an account or logging in, you agree to Amazon's{' '}
              <a href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
                Conditions of Use
              </a>
              {' '}and{' '}
              <a href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
    
          <div className="mt-8 w-[350px] border-t border-gray-300 pt-4">
            <div className="flex justify-center space-x-4 text-xs text-[#0066c0]">
              <a href="#" className="hover:text-[#c45500] hover:underline">Conditions of Use</a>
              <a href="#" className="hover:text-[#c45500] hover:underline">Privacy Notice</a>
              <a href="#" className="hover:text-[#c45500] hover:underline">Help</a>
            </div>
            <div className="text-xs text-gray-600 text-center mt-2">
              © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
  )
}
