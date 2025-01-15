import React from 'react'
import ProductCard from '../ProductCard';
const cartItems = [
    {
      id: 1,
      name: "Huesland by Ahmedabad Cotton 144 TC Cotton Bedsheet",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=60",
      price: 585.00,
      originalPrice: 955.00,
      discount: 39,
      color: "Grey",
      size: "Double",
      pattern: "Geometric",
      material: "100% Cotton",
      threadCount: 144,
      washingInstructions: "Machine wash cold, tumble dry low",
      deliveryEstimate: "3-5 business days",
      seller: "Ahmedabad Cotton",
      ratings: 4.2,
      reviews: 120,
      quantity: 3,
      inStock: true,
      isFulfilled: true,
      isGift: false
    },
    {
      id: 2,
      name: "BSB HOME® 100% Cotton 160 TC Small Leaf Printed Double Bedsheets",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=60",
      price: 299.00,
      originalPrice: 799.00,
      discount: 63,
      color: "Blue",
      size: "Double",
      pattern: "Leaf",
      material: "100% Cotton",
      threadCount: 160,
      washingInstructions: "Hand wash recommended, do not bleach",
      deliveryEstimate: "4-7 business days",
      seller: "BSB HOME",
      ratings: 4.5,
      reviews: 85,
      quantity: 1,
      inStock: true,
      isFulfilled: true,
      isGift: false
    },
    {
      id: 3,
      name: "Raymond Home Cotton Double Bedsheet with Pillow Covers",
      image: "https://images.unsplash.com/photo-1601078979255-d7d2f3dbb9c4?w=800&auto=format&fit=crop&q=60",
      price: 799.00,
      originalPrice: 1199.00,
      discount: 33,
      color: "Green",
      size: "Double",
      pattern: "Floral",
      material: "Cotton Blend",
      threadCount: 200,
      washingInstructions: "Machine wash warm, tumble dry medium",
      deliveryEstimate: "2-4 business days",
      seller: "Raymond Home",
      ratings: 4.7,
      reviews: 95,
      quantity: 2,
      inStock: true,
      isFulfilled: false,
      isGift: true
    },
    {
      id: 4,
      name: "Trident Cotton King Size Bedsheet with 2 Pillow Covers",
      image: "https://images.unsplash.com/photo-1616627338335-7ecfd4c270b8?w=800&auto=format&fit=crop&q=60",
      price: 999.00,
      originalPrice: 1699.00,
      discount: 41,
      color: "White",
      size: "King",
      pattern: "Solid",
      material: "Egyptian Cotton",
      threadCount: 300,
      washingInstructions: "Dry clean only",
      deliveryEstimate: "5-7 business days",
      seller: "Trident",
      ratings: 4.8,
      reviews: 150,
      quantity: 1,
      inStock: false,
      isFulfilled: true,
      isGift: false
    },
    {
      id: 5,
      name: "Spaces Atrium Cotton Printed Single Bedsheet",
      image: "https://images.unsplash.com/photo-1574323688405-5b530b8ea347?w=800&auto=format&fit=crop&q=60",
      price: 399.00,
      originalPrice: 699.00,
      discount: 43,
      color: "Pink",
      size: "Single",
      pattern: "Printed",
      material: "100% Cotton",
      threadCount: 150,
      washingInstructions: "Machine wash cold, do not tumble dry",
      deliveryEstimate: "3-6 business days",
      seller: "Spaces Atrium",
      ratings: 4.3,
      reviews: 60,
      quantity: 4,
      inStock: true,
      isFulfilled: false,
      isGift: false
    }
  ];
  
export default function ProductSection() {
  return (
    <>
    <div >

    <h1 className='font-bold text-2xl'>Products</h1>
    {
        cartItems.map((product)=><ProductCard product={product}/>)
    }
    </div>
    </>
  )
}
