import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";

const Process = () => {

    const renderSteps = stpes.map(item=>{
        return(
            <div className={`flex flex-col gap-[2.5rem] max-[600px]:my-[3rem] ${item.id%2===0 ? 'mt-55':'mb-55'}`} key={item.id}>
                <span className='w-fit rounded-full text-center self-center text-8xl flex text-black border-4 border-dotted max-[600px]:text-6xl'>{item.number}</span>

                <div className='flex items-center gap-[0.8rem]'>
                    <span className='bg-gradient-to-b from-pink-400 to-pink-500 text-2xl text-white p-[0.8rem] rounded-full max-[600px]:text-xl'>{item.icon}</span>
                    <div>
                        <h4 className='font-bold text-2xl'>{item.title}</h4>
                        <p>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[90vw] mx-auto py-15'>
                <div className='w-fit mr-auto'>
                    <Heading Heading='Processes' Color='Our' />
                </div>

                <div className='grid grid-cols-4  max-[1050px]:grid-cols-2 max-[600px]:grid-cols-1 mt-15 gap-[1rem]'>
                    {renderSteps}
                </div>

                



            </div>
        </section>
    )
}

export default Process

const stpes = [
    {
        id: 1,
        number: <TbCircleNumber1 />,
        title: 'Sources',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2 />,
        title: 'ManuFacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3 />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4 />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <FiTruck />
    },
]