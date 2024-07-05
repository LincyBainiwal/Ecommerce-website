import React from 'react'
import Navbar from '../customer/components/navbar/Navbar'
import Footer from '../customer/components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from '../customer/components/cartSection/Cart'
import Product from '../customer/components/Product/Product'
import HomePage from '../customer/pages/HomePage'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
// import Cartorder from '../customer/components/cartOrder/Cartorder'
const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order:orderId' element={<OrderDetails/>}></Route>
        </Routes>
        <div>
          {/* <Product/> */}
          {/* <Cartorder/> */}
            <Footer/>
        </div>
        
       
    </div>
  )
}

export default CustomerRoutes