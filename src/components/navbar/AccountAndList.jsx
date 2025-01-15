import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import { selectModal, togglePopup } from '../../reducer/AmazonSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function AccountAndList() {

      const isOpen = useSelector(state=>selectModal(state))
  const dispatch = useDispatch()
const [top,setTop] = useState(0)
function handleMouseEnter(e){
  dispatch(togglePopup(true))
  setTop(e.clientY)
}
  return (
    <>
    <div className='relative overflow-visible' onMouseLeave={()=>dispatch(togglePopup(false))} onMouseEnter={handleMouseEnter} >
    {
        isOpen && <Modal />
      }
        <p>Hello Sign-in</p>
        <p>Accounts and Lists</p>
    </div>
    </>  
  )
}
