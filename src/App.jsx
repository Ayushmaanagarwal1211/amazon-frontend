import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectSidebar } from './reducer/AmazonSlice'
import Header from './components/header/Header'
import Section from './components/sections/Section'
import BelowNavbar from './components/navbar/BelowNavbar'
import Sidebar from './components/navbar/Sidebar'


function App() {
  const isSideBarVisible = useSelector(state=>selectSidebar(state))
  return (
    <>
      <Navbar/>
      <BelowNavbar/>
     {
      isSideBarVisible &&  <Sidebar/>
     } 
     <div className='w-[80vw] m-auto p-0 overflow-scroll'>
      <Header/>
     <Section/>
     </div>
    </>
  )
}

export default App
