import React from 'react'
import Buttton from '../Button/Buttton'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 mt-15 bg-contain bg-right bg-no-repeat' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className='md:flex  max-[950px]:bg-zinc-100 max-[950px]:ml-[10vw] py-10 max-w-[90vw] max-[905px]:'>
          <span className='max-[950px]:text-7xl text-9xl text-pink-500 font-bold transform md:-rotate-90 h-fit self-center'>20%</span>
          <div className='max-w-1/2 max-[950px]:max-w-full max-[950px]:pr-[10vw]'>
            <h3 className='max-[950px]:text-5xl text-7xl font-bold text-zinc-800'>First Order Discount</h3>
            <p className='text-zinc-600 my-4'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
            <Buttton content='Get a Discount'/>
          </div>
        </div>
    </section>
  )
}

export default Discount