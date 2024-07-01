import React from 'react'
import './ProductCard.css'
const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-4 transition-all cursor-pointer'>
      <div className="h-[20rem]">
        <img className='h-full w-full object-cover object-left-top ' src={product.imageUrl}/>
      </div>

      <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{product.category}</p>
           <p> {product.name}</p>
        </div>
        <div className='flex items-center space-x-2' >
           <p className='font-semibold'>₹{product.price}</p>
           <p className='line-through opacity-50'>₹{product.actualprice}</p>
           <p className='text-pink-600 font-semibold'>{product.discount}% off</p>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard

