import React from 'react'

const Buttton = ({content}) => {
  return (
    <button className='max-w-fit bg-gradient-to-b from-pink-400 to-pink-500 text-white py-[0.6rem] px-[1.5rem] rounded-lg md:text-lg text-md hover:scale-102 hover:to-pink-600 transition-all duration-300 cursor-pointer'>{content}</button>
  )
}

export default Buttton