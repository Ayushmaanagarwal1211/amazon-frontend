import React from 'react'
import Section_1 from './Section-1'
import MultipleItems from './MultipleItems'
import ProductSection from './ProductSection'

export default function Section() {
    const images  = [
        "https://m.media-amazon.com/images/I/51B-RPLphdL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51B-RPLphdL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61wFM39uKIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/814YelpkIUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51dBtAnWQJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61xaOlax5SL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51B-RPLphdL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51B-RPLphdL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61wFM39uKIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/814YelpkIUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51dBtAnWQJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61xaOlax5SL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51B-RPLphdL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51B-RPLphdL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61wFM39uKIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/814YelpkIUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51dBtAnWQJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61xaOlax5SL._AC_SY200_.jpg"
    ]
  return (
    <div className='  relative gap-0 flex-wrap  mt-3 h-[auto] flex-row w-[100%] overflow-hidden'>
        <Section_1/>
        <MultipleItems heading={"Up to 70% off | Toys & fun games | Amazon brands & more"} images={images}/>
        <MultipleItems heading={"Up to 40% off | Deals on smartphones"} images={images}/>
        <ProductSection/>
    </div>
  )
}
