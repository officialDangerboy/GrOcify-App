import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Value from '../Values/Value'
import Product from '../Products/Product'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Value />
      <Product />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  )
}

export default Home