import React from 'react'

const Banner = ({title,img}) => {
  return (
    <div className='h-[50vh] max-[600px]:h-[25vh] flex justify-center items-center bg-center mt-25 max-[600px]:mt-15 bg-cover bg-no-repeat relative' style={{backgroundImage:`url(${img})`}}>
        <h2 className='max-[600px]:text-2xl text-5xl text-zinc-500 p-5 rounded-xl font-bold bg-white z-20'>{title}</h2>
        <div className='absolute bg-black/50 z-10 h-full w-full'></div>
    </div>
  )
}

export default Banner