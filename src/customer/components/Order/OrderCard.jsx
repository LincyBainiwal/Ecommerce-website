import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = () => {
  return (
    <div className='p-8  shadow-md  shadow-gray hover:shadow-2xl boorder'>
      <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
 <Grid item xs={6}>
    <div className='flex cursor-pointer '>
        <img className='w-[5rem]  h-[5rem]   object-cover object-top'src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsFHH0C0qE46vqGDIcDhYAjdIQUsc5uoFBQ&s " alt="" />
    
    <div className='ml-5 space-y-2'>
    <p className=''>girl red suit</p>
    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
    <p className='opacity-50 text-xs font-semibold'>Color: Maroon</p>
    </div>
    </div>
 </Grid>
 <Grid item xs={2}>
    <p>₹1099</p>
 </Grid>
 <Grid item xs={4}>
   {true && <div>
    <p>
    <AdjustIcon sx={{width:"15px" , height:"15px"}} className="text-green-600 mr-2 text-sm" />
        <span>Delivered On July 12</span>
    </p>
    <p></p>
    </div>}
    {true && <p>
        <span>Your Item Has Been Delivered</span>
    </p>}
 </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
