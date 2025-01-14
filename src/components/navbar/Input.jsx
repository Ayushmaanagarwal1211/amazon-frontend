import React from 'react'
import {FaMagnifyingGlass} from 'react-icons/fa6'
 export default function Input() {
  return (
    <div className='w-[100%] flex gap-0 h-[100%] pt-1 pb-1 rounded-lg'  >
        <div className='dropdown w-[70px] '>
            <select defaultValue={"All"} className='w-[100%] h-[100%] text-center'>
                <option value="A">fd</option>
                <option value="B">df</option>
                <option value="V">cvc</option>
                <option value="D">cv</option>
                <option value="D">cvcv</option>
            </select>
        </div>
        <input className='w-[80%]'></input>
        <div className='h-[100%] bg-[#febd69] flex justify-center items-center w-[10%]'><FaMagnifyingGlass size={"2rem"}/></div>
    </div>
  )
}
