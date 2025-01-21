import React from 'react';
import { Star, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import usePost from '../hooks/usePost';
import useGet from '../hooks/useGet';

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
  const post = usePost();

  async function handleAddToCart() {
    post(`https://amazon-backend-1-mwv3.onrender.com/cart/add-product/${product._id}`, {});
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col space-y-4">
        <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-900 line-clamp-2">
            {product.name}
          </h2>
          
          <div className="flex items-center space-x-2">
            <div className="flex">
              {renderStars(product.ratings)}
            </div>
            <span className="text-sm text-blue-600">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-green-600">
              -{product.discount}%
            </span>
          </div>

          <div className="text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <Truck className="w-4 h-4 text-green-600" />
              <span>FREE Delivery by Amazon</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Get it by {product.deliveryEstimate}
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}