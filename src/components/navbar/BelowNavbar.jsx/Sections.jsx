import React from 'react'

export default function Sections({heading,items}) {
  return (
    <div className='flex flex-col gap-4 mb-8'>
        <h1 className='font-bold text-xl'>{heading}</h1>
        {
            items.map((data=><div>{data}</div>))
        }
    </div>
  )
}
