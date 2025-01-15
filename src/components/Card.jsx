import React from 'react'

export default function Card({heading,images}) {
  return (
    <div className="w-[600px] max-md:w-[70vw] max-sm:w-[90vw] max-lg:w-[30vw] h-[450px] max-md:h-[400px]  max-w-sm bg-white p-6 rounded-lg z-[80] shadow-lg">
      {/* Card Header */}
      <div className="p-4 max-md:p-1">
        <div className="flex items-center gap-2">
          {/* <Percent className="w-5 h-5" /> */}
          <h2 className="text-xl font-bold">Up to 75% off | Electronics & accessories</h2>
        </div>
      </div>
      
        <div className={`grid h-auto ${images.length>2?"grid-rows-2":""} grid-cols-[${images.length>1?"2":'1'}] grid-flow-col-dense`}>
            {
                images.map((data)=><img 
                src={data}
                alt="Tablet"
                className={`object-contain w-[100%] h-[100%]`}
              />)
            }
       
        
      </div>
      
      {/* Card Footer */}
      <div className="p-4 border-t border-gray-100">
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
          See all offers
        </a>
      </div>
    </div>
//   </div>
  )
}
