import React from 'react'
import Mens from './Mens'
import { mensWearData } from './mensWearData'

const Cart = () => {
  return (
    <div>
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Mens  sectionName={"Mens's Kurta"}  />
        <Mens  sectionName={"Men's shoes"}/>
        <Mens sectionName={"Women's Saree"}/>
        <Mens sectionName={"Women's Kurti"}/>
    </div>
    </div>
  )
}

export default Cart