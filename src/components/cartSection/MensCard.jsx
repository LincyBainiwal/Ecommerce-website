import React from 'react'

const MensCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-pink-500 hover:bg-primary'>
      <div className="h-[15rem] w-[10rem] ">
        <img className=" py-4 object-cover object-top w-full h-full "  role='link' src={product.imageUrl} />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 ">Redtape</h3>
        <p className="mt-2 text-sm text-gray-500">Men Solid Pure Cotton Straight Kurta</p>
      </div>
    </div>
  )
}

export default MensCard