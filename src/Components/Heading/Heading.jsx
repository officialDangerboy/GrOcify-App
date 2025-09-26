import React from 'react'

const Heading = ({Color,Heading}) => {
    return (
        <div className='gap-3 flex flex-col w-fit mx-auto'>
            <h2 className='text-5xl max-[400px]:text-[2rem] max-[600px]:text-[2.5rem] font-bold '><span className='text-pink-500'>{Color}</span> {Heading}</h2>
            <div className='w-[8rem] h-1 bg-pink-300 ml-auto'></div>
        </div>
    )
}

export default Heading