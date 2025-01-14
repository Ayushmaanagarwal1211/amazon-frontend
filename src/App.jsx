import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import BelowNavbar from './components/navbar/BelowNavbar.jsx/BelowNavbar'
import Sidebar from './components/navbar/BelowNavbar.jsx/Sidebar'
import { useSelector } from 'react-redux'
import { selectSidebar } from './reducer/AmazonSlice'
import Header from './components/header/Header'
import Section from './components/sections/Section'


function App() {
  const isSideBarVisible = useSelector(state=>selectSidebar(state))
  return (
    <>
      <Navbar/>
      <BelowNavbar/>
     {
      isSideBarVisible &&  <Sidebar/>
     } 
     <div className='w-[80vw]  p-0 overflow-scroll'>
      <Header/>
     <Section/>
     </div>
    </>
  )
}

export default App
