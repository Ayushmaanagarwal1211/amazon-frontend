import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectModal, selectUser, togglePopup } from '../reducer/AmazonSlice'
import {Link} from 'react-router'
import { FaCaretUp } from 'react-icons/fa6'
import Profile from './Profile'
const lists = [
                'Create a Wish List',
                'Wish from Any Website',
                'Baby Wishlist',
                'Discover Your Style',
                'Explore Showroom',
]
const accountLists = [
  'Your Account',
  'Your Orders',
  'Your Wish List',
  'Your Recommendations',
  'Your Prime Membership',
  'Your Prime Video',
]
export default function Modal({top}) {
  const dispatch = useDispatch()
  const user = useSelector(state=>selectUser(state))
  console.log(user)
  return (

 
   <div onMouseLeave={()=>dispatch(togglePopup(false))} onMouseEnter={()=>dispatch(togglePopup(true))}   className={`absolute top-[45px] w-[300px] left-[-100px] p-4 h-auto z-[100] bg-white`}>
        <FaCaretUp className='absolute top-[-25px] right-10' color='white' size={'3rem'}/>
        <div className="p-6 flex w-auto h-auto flex-col items-center gap-3 border-b border-gray-200">
         {user ? <>
          <Link to={'/profile'} className='w-full bg-[#FFD814] hover:bg-[#F7CA00] py-2.5 px-4 rounded-lg font-medium text-black transition-colors fledx justify-center text-center'><button className="">
           Profile
          </button></Link>
         </>:<>
         <Link to={'/login'} className='w-full bg-[#FFD814] hover:bg-[#F7CA00] py-2.5 px-4 rounded-lg font-medium text-black transition-colors fledx justify-center text-center'><button className="">
           Sign-In
          </button></Link>
         
         </> 
          }
        </div>

        <div className="p-6 grid w-auto h-auto  grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h2 className="font-bold text-lg mb-3">Your Lists</h2>
            <ul className="space-y-2">
              {lists.map((item) => (
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
              {accountLists.map((item) => (
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
