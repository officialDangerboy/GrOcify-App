import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import DairyProductsBanner from '../../assets/dairy-banner.jpg'
const Dairy = () => {
  return (
    <div>
        <CategoryPage title='Dairy & Eggs' img={DairyProductsBanner} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy