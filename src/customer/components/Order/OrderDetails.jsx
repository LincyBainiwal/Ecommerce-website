import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20  '>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid className='space-y-5 ' container>
                {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-6  border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-8'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://www.zeelclothing.com/media/catalog/product/cache/1a663af2519e1158a3f1f53631c1a350/y/n/ynf3501red_1_.jpg" alt="" />

                            <div className='space-y-2  ml-5'>
                                <p className='font-semibold'>Girls Red long kurti</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color:maroon</span>
                                    <span>Size: M</span></p>
                                <p>Seller: Linaria</p>
                                <p>₹499</p>
                            </div>
                        </div>
                    </Grid>


                    <Grid item>
                        <Box sx={{color:'#ff1d80'}}>
                             <StarBorderIcon sx={{fontSize:'2rem'}} fontSize={'2px'} className='px-2 '/>
                             <span>Rate & review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
            </Grid>
        </div>

    )
}

export default OrderDetails
