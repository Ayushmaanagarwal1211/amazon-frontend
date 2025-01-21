import React from 'react'
import india_flag from '../../images/india-flag-icon.svg'

export default function Countries() {
  return (

<div className='bg-none flex gap-1 justify-center items-center'>
    <img className='w-[15px] h-[15px]' src={india_flag}/>      
        <select defaultValue={"En"} className='bg-[#131921] text-[14px] font-bold  flex gap-0 w-[auto]  text-white'>
                <option value="india">EN</option>
                <option value="india">india</option>
                <option value="india">india</option>
                <option value="india">india</option>
                <option value="india">india</option>
            </select>   
    </div>
  )
}
