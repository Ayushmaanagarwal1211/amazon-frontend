import React from 'react'
import {FaMagnifyingGlass} from 'react-icons/fa6'
 export default function Input() {
  return (
    <div className='w-[100%] flex gap-0 h-[100%] pt-2 pb-2 '  >
        <div className='dropdown w-[60px] rounded-s-md  '>
            <select defaultValue={"All"} className='rounded-s-md w-[100%] h-[100%] text-center'>
                <option value="A">fd</option>
                <option value="B">df</option>
                <option value="V">cvc</option>
                <option value="D">cv</option>
                <option value="D">cvcv</option>
            </select>
        </div>
        <input className='w-[100%]' placeholder='Search Amazon'></input>
        <div className='h-[100%] bg-[#febd69]  rounded-e-md flex justify-center items-center w-[5%] p-2'><FaMagnifyingGlass color='gray' size={"2rem"}/></div>
    </div>
  )
}
