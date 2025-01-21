import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import { selectModal, togglePopup } from '../../reducer/AmazonSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaCaretDown } from 'react-icons/fa6'
export default function AccountAndList() {
  const isOpen = useSelector(state=>selectModal(state))
  const dispatch = useDispatch()
  function handleMouseEnter(e){
    dispatch(togglePopup(true))
  }
  return (
    <>
    <div className='relative overflow-visible' onMouseEnter={handleMouseEnter} >
    {
        isOpen && <Modal />
      }
        <p className='text-[12px] font-semibold'>Hello Sign-in</p>
        <p className='text-[14px] font-bold flex justify-between gap-2 items-center  '>Accounts and Lists <FaCaretDown size={"1rem"}/></p>

    </div>
    </>  
  )
}
