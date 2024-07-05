import React from 'react'
import Mens from './Mens'


const Cart = () => {
  return (
    <div>
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Mens  sectionName={"Women's Kurti"}  />
        <Mens  sectionName={"Men's shoes"}/>
        <Mens sectionName={"Women's Saree"}/>
        <Mens sectionName={"Kid's Cloth"}/>
    </div>
    </div>
  )
}

export default Cart