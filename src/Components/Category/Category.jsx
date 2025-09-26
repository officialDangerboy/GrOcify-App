import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Buttton from '../Button/Buttton'
import { Link } from 'react-router-dom'

const Category = () => {

    const renderCard = Categories.map(card => {
        return (
            <div className='w-[400px]' key={card.id}>
                <div className='-mb-10 h-[30vh] max-[]: relative w-full'>
                    <img src={card.image} alt="" className='absolute bottom-0 object-cover' />
                </div>

                <div className='pt-17 p-8 rounded-xl bg-zinc-100'>
                    <h3 className='text-3xl font-bold text-zinc-800'>{card.name}</h3>
                    <p className='text-lg text-zinc-600 mt-3 mb-9'>{card.descreption}</p>
                    <Link to={card.path} className='max-w-fit bg-gradient-to-b from-pink-400 to-pink-500 text-white py-[0.6rem] px-[1.5rem] rounded-lg md:text-lg text-md hover:scale-102 hover:to-pink-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    }
    )

    return (
        <section>

            <div className='max-w-[90vw] m-auto pb-15'>
                <Heading Color="Shop" Heading="by Category" />

                {/* Category Cards */}
                <div className='flex flex-wrap justify-center items-center gap-5 md:mt-15'>
                    {renderCard}
                </div>

            </div>

        </section>
    )
}

export default Category

const Categories = [
    {
        id: 1,
        name: 'Fruits & Vaggies',
        descreption: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsCat,
        path:'/fruits'
    },
    {
        id: 2,
        name: 'Dairy & Eggs',
        descreption: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DairyCat,
        path:'/dairy'
    },
    {
        id: 3,
        name: 'Meat & SeaFood',
        descreption: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: DairyCat,
        path:'/seafood'
    },
]