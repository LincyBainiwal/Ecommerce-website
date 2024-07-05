import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../cartOrder/CartItem'

const Ordersummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>  
      </div>
      <div>
      <div className='py-6 lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
           {[1,1,1,1].map((item)=><CartItem/>)}
           </div>
  
      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
         <div >
          <p className='uppercase  border font-bold opacity-90 pb-4'>Price details</p>
          <hr/>
          <div className='space-y-5 font-semibold mb-10'>
             <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹999</span>
             </div>
             <div className='flex justify-between pt-3'>
                <span>Discount</span>
                <span className='text-green-600'>-₹599</span>
             </div>
             <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
             </div>
             <div className='flex justify-between pt-3 text-black'>
                <span>Total Amount</span>
                <span className='text-green-600' >₹400</span>
             </div>
          </div>
<Button variant='contained' className='w-full mt-5' sx={{px:'2.5rem' , py:"0.7rem" , bgcolor:"#FF1D8E"}}>
       Checkout
</Button>

         </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Ordersummary
