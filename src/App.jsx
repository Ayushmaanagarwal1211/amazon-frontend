import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectSidebar } from './reducer/AmazonSlice'
import Header from './components/header/Header'
import Section from './components/sections/Section'
import BelowNavbar from './components/navbar/BelowNavbar'
import Sidebar from './components/navbar/Sidebar'
import { BrowserRouter,Routes,Route } from 'react-router'
import Login from './components/authentication/Login'
import Homepage from './components/Homepage'
import Register from './components/authentication/Register'
import Cart from './components/cart/Cart'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
  
     <Route element={<Homepage/>} path='/'></Route>
<Route element={<Register/>} path='/register'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Cart/>} path='/cart'></Route>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
