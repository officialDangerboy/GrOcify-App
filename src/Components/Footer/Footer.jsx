import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='bg-zinc-100'>
            <div className='grid grid-cols-4 max-w-[90vw] mx-auto py-[3rem]  max-[1250px]:grid-cols-3 max-[1050px]:grid-cols-2 gap-[2rem] max-[650px]:grid-cols-1 max-[650px]:gap-y-15 '>
                <div className='flex flex-col gap-[1rem] w-[18rem]'>
                    <a className='text-3xl font-bold' href="">Gr<span className='text-pink-500 uppercase'>o</span>cify
                    </a>
                    <p className='text-zinc-500'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p className='text-zinc-500 font-semibold text-md'>2025 &copy; All Right Reserved</p>
                </div>


                <ul className=' flex flex-col gap-[1rem] w-fit'>
                    <li><h4 className='text-black font-bold text-xl'>Company</h4></li>
                    <li><a href="" className='hover:text-pink-500 font-semibold tracking-wider text-zinc-500'>About</a></li>
                    <li><a href="" className='hover:text-pink-500 font-semibold tracking-wider text-zinc-500 '>FAQ's</a></li>
                </ul>

                <ul className=' flex flex-col gap-[1rem] w-fit'>
                    <li><h4 className='text-black font-bold text-xl'>Support</h4></li>
                    <li><a href="" className='hover:text-pink-500 font-semibold tracking-wider text-zinc-500'>Support Center</a></li>
                    <li><a href="" className='hover:text-pink-500 font-semibold tracking-wider text-zinc-500 '>Feedback</a></li>
                    <li><a href="" className='hover:text-pink-500 font-semibold tracking-wider text-zinc-500 '>Contect us</a></li>
                </ul>

                <ul className=' flex flex-col w-fit gap-[1rem]'>
                    <li><h4 className='text-black font-bold text-xl'>Stay Connected</h4></li>


                    <p className='font-semibold tracking-wider text-zinc-500'>Questions or Feedback? we'd love to hear from you.</p>

    
                    <div className=" p-1 pl-1 bg-white rounded-lg flex items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.3)] w-fit">
                        <input type="text" placeholder="Email Address" autoComplete="off" className="px-[0.5rem] focus:outline-none h-[100%]" />
                        <button className="bg-gradient-to-b from-pink-400 to-pink-500 p-[0.6rem] rounded-lg"><MdArrowForwardIos className="text-lg text-white" /></button>
                    </div>
                </ul>




            </div>
        </footer>
    )
}

export default Footer