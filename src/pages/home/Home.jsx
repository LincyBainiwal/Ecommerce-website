import React from 'react'
import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection';
import Cart from "../../components/cartSection/Cart"
function Home() {
  
  return (
    <Layout>
     <HeroSection/>
     <Cart/>
    </Layout>
  )
}

export default Home