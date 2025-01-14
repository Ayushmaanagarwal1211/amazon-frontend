import React from 'react'

export default function Card({heading,images}) {
  return (
    // <div className="h-[400px] bg-gray-100 flex items-center justify-center p-4 z-[80]">
    <div className="w-[600px] h-[450px] max-w-sm bg-white p-6 rounded-lg z-[80] shadow-lg">
      {/* Card Header */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          {/* <Percent className="w-5 h-5" /> */}
          <h2 className="text-xl font-bold">Up to 75% off | Electronics & accessories</h2>
        </div>
      </div>
      
      {/* Card Image */}
        {/* Decorative Elements */}
      
        
        {/* Product Images */}
        <div className={`grid h-auto grid-rows-2 grid-cols-[${images.length>1?"2":'1'}] grid-flow-col-dense`}>
            {
                images.map((data)=><img 
                src={data}
                alt="Tablet"
                className={`object-contain w-[${images.length>1?"50%":"100%"}]`}
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
