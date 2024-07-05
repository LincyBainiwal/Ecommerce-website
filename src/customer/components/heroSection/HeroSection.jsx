import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { ImageList } from './herodata';

function HeroSection() {
     const items=ImageList.map((item)=><img  className="object-scale-down max-h-[90%] m-auto max-w-full " role='presentation' src={item.img} alt=""/>)
  return (
    <AliceCarousel

    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    
  
  
/>
  )
}

export default HeroSection
