import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import AllProductsBanner from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
        <CategoryPage title='All Products' img={AllProductsBanner} categories={['All']}/>
    </div>
  )
}

export default AllProducts