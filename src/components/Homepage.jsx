import React from 'react'
import Navbar from './navbar/Navbar'
import BelowNavbar from './navbar/BelowNavbar'
import Sidebar from './navbar/Sidebar'
import Header from './header/Header'
import Section from './sections/Section'
import { useSelector } from 'react-redux'
import { selectSidebar } from '../reducer/AmazonSlice'
import Footer from './footer/Footer'

export default function Homepage() {

  return (
    <>
      <BelowNavbar/>
      <Sidebar/>

     <div className='w-[98vw] h-auto max-md:w-[100vw] m-auto p-0 '>
      <Header/>
     <Section/>
     </div>
    </>
  )
}
