import React from 'react'
import { FaHeart, FaPlus } from "react-icons/fa";
import Buttton from '../Button/Buttton';

const Cards = ({title,img,price,id}) => {
  return (
    <div key={id} className='shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-zinc-100 p-[1rem] rounded-xl'>
        <div className='text-[1.8rem] flex justify-between items-center'>
            <span className='text-zinc-300 '>
                <FaHeart />
            </span>
            <span className='bg-gradient-to-b from-pink-400 to-pink-500 p-1.5 rounded-lg text-white'>
                <FaPlus />
            </span>
        </div>

        <div className='h-50 w-full'>
          <img src={img} className='w-full h-full object-contain mx-auto'/>
        </div>

        <div className='text-center mx-auto w-fit'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 mb-4 font-bold text-2xl'>${price.toFixed(2)}</p>
          <Buttton content='Shop Now' />
        </div>

    </div>
  )
}

export default Cards