import React from 'react'
import { Minus, Plus } from 'lucide-react';
import usePatch from '../../hooks/usePatch';

export default function CartItem({item,count,isSelected,_id}) {
  const patch = usePatch()
        function handleIncreaseCount(){
          return patch(`cart/increase-product-count/${_id}`,{})
        }
        function handleDecreaseCount(){
            if(count == 1){
              return patch(`cart/remove-product-from-cart/${_id}`,{})
            }
            return patch(`cart/decrease-product-count/${_id}`,{})
          }
          function handleRemove(){
            return patch(`cart/remove-product-from-cart/${_id}`,{})
          }
        function handleSelectionChange(){
          return patch(`cart/change-product-selection/${_id}`,{})
        }
        item = {...item, ...item.product}
  return (
    <div key={item.id}  className={`p-6 `}>
                <input type='checkbox' onChange={handleSelectionChange} checked={isSelected}></input>
              <div className={`${isSelected?"":"pointer-events-none"} flex space-x-6 `} >
                <div className="flex-shrink-0 w-32 h-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <div className="mt-1 flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Color: {item.color}</span>
                        <span className="text-sm text-gray-500">Size: {item.size}</span>
                      </div>
                      {item.pattern && (
                        <p className="mt-1 text-sm text-gray-500">Pattern: {item.pattern}</p>
                      )}
                      <div className="mt-2 flex items-center space-x-2">
                        {item.inStock && (
                          <span className="text-sm text-green-600">In stock</span>
                        )}
                        {item.isFulfilled && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Fulfilled
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                      </div>
                      <span className="text-sm font-medium text-red-600">-{item.discount}%</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center border rounded-md">
                      <button   className="p-2 hover:bg-gray-100" onClick={handleDecreaseCount}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-gray-900">{count}</span>
                      <button className="p-2 hover:bg-gray-100" onClick={handleIncreaseCount}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex space-x-4 text-sm text-blue-600">
                      <button className="hover:text-blue-800" onClick={handleRemove}>Delete</button>
                      <button className="hover:text-blue-800">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
