import React from 'react'
import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection';
import Cart from "../../components/cartSection/Cart"
import Product from '../../components/Product/Product';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
function Home() {
  
  return (
    <Layout>
     {/* <HeroSection/>
     <Cart/> */}
     {/* <Product/> */}
     <ProductDetails/>
    </Layout>
  )
}

export default Home