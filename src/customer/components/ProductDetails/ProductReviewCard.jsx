import React from 'react'
import {Avatar, Grid , Box , Rating } from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56 , height:56 , bgcolor:"#9155fd"}}>
                  L
                </Avatar>
            </Box>
        </Grid>

        <Grid item xs={9}>
            <div className='space-y-2 '>
<div>
    <p className='font-semibold text-lg'>Ram</p>
    <p className='opacity-70'>April 5 , 2024</p>
</div>
            </div>
            <Rating name="half-rating" value={3.5}  readOnly precision={0.5} />
            <p>
                I love this product , Thanku .
            </p>
            
        </Grid>

      </Grid>
    </div>
  )
}

export default ProductReviewCard
