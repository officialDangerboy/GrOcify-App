import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Category from '../Category/Category'
import ProductsList from '../ProductsList/ProductList'
import Cards from '../Cards/Cards'
import Buttton from '../Button/Buttton'
import { Link } from 'react-router-dom'

const Product = () => {

    const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [ActiveTag, SetActiveTag] = useState('All')
    const filteredItems = ActiveTag ==='All' ? ProductsList : ProductsList.filter(item=>item.category === ActiveTag)

    const renderCard = filteredItems.slice(0,8).map(product=>{
        return(
            <Cards title={product.name} img={product.image} price={product.price} key={product.id}/>
        )
    })

    return (
        <section>
            <div className='max-w-[90vw] mx-auto mt-15'>
                <Heading Color='Our' Heading='Produtcs' />

                {/* Tabs  */}
                <div className='mb-5 flex flex-wrap gap-3 mx-auto justify-center mt-[3rem]'>
                    {Categories.map(Category => {
                        return (
                            <button key={Category} className={` px-3 bg-zinc-100 shadow-[0_0_4px_rgba(0,0,0,0.3)] p-1 rounded-lg ${ActiveTag == Category ? "bg-gradient-to-b from-pink-400 to-pink-500 text-white" : "bg-zinc-100 text-zinc-600"}`} onClick={() => {
                                SetActiveTag(Category)
                            }} >{Category}</button>
                        )
                    })}
                </div>

                <div className='mt-15 grid grid-cols-4 gap-8 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[550px]:grid-cols-1'>
                    {renderCard}
                </div>

                <div className='text-center w-full mt-10 mb-5'>
                    <Link to='/allproducts' className='max-w-fit bg-gradient-to-b from-pink-400 to-pink-500 text-white py-[0.6rem] px-[1.5rem] rounded-lg md:text-lg text-md hover:scale-102 hover:to-pink-600 transition-all duration-300 cursor-pointer'>View All</Link>
                </div>
            </div>

        </section>
    )
}

export default Product