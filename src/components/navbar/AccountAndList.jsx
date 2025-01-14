import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import { selectModal, togglePopup } from '../../reducer/AmazonSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function AccountAndList() {

      const isOpen = useSelector(state=>selectModal(state))
  const dispatch = useDispatch()
console.log(isOpen)
  return (
    <>
    {
        isOpen && <Modal/>
      }
    <div className='relative' onMouseLeave={()=>dispatch(togglePopup(false))} onMouseEnter={()=>dispatch(togglePopup(true))} >
        <p>Hello Sign-in</p>
        <p>Accounts and Lists</p>
    </div>
    </>  
  )
}
