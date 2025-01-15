import React from 'react'
import { Star, Truck, CreditCard, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducer/AmazonSlice';
const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };
export default function ProductCard({product}) {
    console.log(product)
    const dispatch =useDispatch()
    function handleAddToCart(){
        dispatch(addToCart(product))
    }
  return (
    <div className="min-h-screen bg-gray-50 py-3 px-3 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-white p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-[auto] h-[auto] max-w-[300px] max-h-[300px]   "
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-medium text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-4"></p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {renderStars(product.ratings)}
              </div>
              <span className="text-blue-600 font-medium">{product.ratings}</span>
              <span className="text-gray-500">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="inline-flex px-2 py-1 text-sm font-semibold bg-red-500 text-white rounded">
                  Republic Day Deal
                </span>
              </div>
              <div className="mt-2 flex items-baseline space-x-2">
                <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-red-600">({product.discount}% off)</span>
              </div>
            </div>

            {/* Offers */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span></span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Truck className="w-5 h-5 text-green-600" />
                <span>FREE delivery {product.deliveryEstimate}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-md flex items-center justify-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
