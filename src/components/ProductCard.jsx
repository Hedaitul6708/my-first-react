import React from 'react'
import { FaRegEye, FaStarHalfAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';

const ProductCard = ({product}) => {
  return (
    <div>
      <div>
      <img src={product.image} alt={product.title} 
      className='h-60 mx-auto object-contain rounded-lg transition-transform duration-300 hover:scale-110'
      />

      <div>
        <div className='flex justify-between mt-5'>
            <h3>{product.title}</h3>
            <div className='flex items-center gap-2'>
                <FaRegEye className='text-gray-500' />
                <FaHeartCircleCheck className='text-rose-500' />
            </div>
        </div>
      </div>
      <p className='text-md text-gray-400 py-1'>{product.price}</p>

      <div className='flex justify-between'>
        <p className='text-md text-black font-bold bg-yellow-400 rounded px-2'>{product.brand}</p>

        <p className='text-sm text-gray-500 flex justify-center items-center gap-2'>
            <FaStarHalfAlt className='text-yellow-400' />
            {product.rating}
        </p>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
