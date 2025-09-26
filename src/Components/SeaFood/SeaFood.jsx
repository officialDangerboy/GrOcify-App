import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import SeaFoodBanner from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <CategoryPage title='Meat & SeaFood' img={SeaFoodBanner} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFood