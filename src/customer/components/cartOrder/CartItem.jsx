import React from 'react'
import {IconButton , Button} from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
    <div className='flex items-center'>
       <div className='w-[15rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img  className='w-full h-full object-cover object-top' src="https://www.zeelclothing.com/media/catalog/product/cache/1a663af2519e1158a3f1f53631c1a350/y/n/ynf3501red_1_.jpg" alt="" />
       </div>
     <div className='ml-5 space-y-1'>
        <p className='font-semibold'> Womens Red Long Kurti</p>
        <p className='opacity-70'> Size : L , Red</p>
        <p className='opacity-70 mt-2'> Seller: FlipKart</p>

        <div className='flex space-x-5 items-center text-gray-900 pt-6'>
        <p className='font-semibold'>₹199 </p>
        <p className='opacity-50 line-through'>₹211</p>
        <p className='text-pink-600 font-semibold'> 5% Off</p>
        </div>
    </div>
    
    </div>
    <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
            <IconButton>
                <RemoveCircleOutlineIcon/>
                </IconButton>
            <span className='py-1 px-7 border rounded-sm'>3</span>
            <IconButton sx={{color: "#FF1D8E"}}>
        <AddCircleOutlineIcon/>
        </IconButton>
        
        </div>

        <div>
            <Button sx={{color: "#FF1D8E"}}> remove</Button>

        </div>
    </div>
    </div>
  )
}

export default CartItem
