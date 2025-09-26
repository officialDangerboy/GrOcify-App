import { FaHeart } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearch,IoMenu,IoCloseSharp } from "react-icons/io5";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [isScrolled, setIsScroll] = useState(false)

    const handleMenuToggle = () => {
        setShowMenu(!showMenu)
    }

    useEffect(()=>{
        const handleIsScroll = () => {
            setIsScroll(window.scrollY > 10)
        }
        window.addEventListener('scroll',handleIsScroll)
        return()=> window.addEventListener('scroll',handleIsScroll)
    },[])

    return (
        <header className={`z-50 bg-white top-0 right-0 left-0 fixed ${isScrolled ? "shadow-lg":'none'}`}>
            <nav className='max-w-[90vw] m-auto py-[1.5rem] flex justify-between items-center max-[650px]:px-[0.0rem] max-[650px]:py-[0.8rem]'>

                {/* logo */}
                <Link to='/' className='text-3xl font-bold' href="">Gr<span className='text-pink-500 uppercase'>o</span>cify
                </Link>

                {/* desktop menu */}
                <ul className='max-[1150px]:hidden flex items-center gap-x-[2.5rem]'>
                    <li><a href="" className='font-semibold tracking-wider text-pink-500'>Home</a></li>
                    <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-pink-500'>About US</a></li>
                    <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-pink-500'>Process</a></li>
                    <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-pink-500'>Contect US</a></li>
                </ul>

                {/* navAction */}
                <div className="flex items-center justify-center gap-x-5 max-[650px]:gap-x-3">

                    <div className="max-[650px]:hidden p-1 pl-1 border-2 border-pink-500 rounded-full flex items-center justify-center">
                        <input type="text" placeholder="search...." autoComplete="off" className="px-[0.5rem] focus:outline-none h-[100%]" />
                        <button className="bg-gradient-to-b from-pink-400 to-pink-500 p-[0.6rem] rounded-full"><IoSearch className="text-lg text-white" /></button>
                    </div>
                    <a href="" className="max-[650px]:text-2xl text-black text-xl">
                        <FaHeart />
                    </a>
                    <a href="" className="max-[650px]:text-2xl text-black text-xl">
                        <GiShoppingBag />
                    </a>

                    {/* Hamburger */}
                    <a href="#" onClick={handleMenuToggle} className="md:hidden text-black text-2xl">
                        {showMenu ? <IoCloseSharp /> : <IoMenu />}
                    </a>
                </div>

                {/* mobile menu */}
                <ul className={`md:hidden flex flex-col absolute bg-pink-500/15 backdrop-blur-xl rounded-xl gap-7 items-center p-[1rem] top-30 -left-full transform -translate-x-1/2 ${showMenu ? "left-1/2":"-left-full"} transition-all duration-500 shadow-xl`}>
                    <li><a href="" className='font-semibold tracking-wider text-pink-500'>Home</a></li>
                    <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-pink-500'>About US</a></li>
                    <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-pink-500'>Process</a></li>
                    <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-pink-500'>Contect US</a></li>
                    <li className="p-1 pl-1 border-2 border-pink-500 rounded-full flex items-center justify-center">
                        <input type="text" placeholder="search...." autoComplete="off" className="px-[0.5rem] focus:outline-none h-[100%]" />
                        <button className="bg-gradient-to-b from-pink-400 to-pink-500 p-[0.6rem] rounded-full"><IoSearch className="text-lg text-white" /></button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar