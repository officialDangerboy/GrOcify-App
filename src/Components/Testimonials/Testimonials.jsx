import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'
import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from 'react-icons/md'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';



const Testimonials = () => {



    return (
        <section>
            <div className='max-w-[90vw] mx-auto py-15'>
                <Heading Color='Customers' Heading='Saying' />

                <div className='py-5 flex justify-end gap-3 mt-6'>
                    <button className='custom-prev shadow-[0_0_4px_rgba(0,0,0,0.3)] hover:bg-gradient-to-b hover:from-pink-400 hover:to-pink-500 hover:text-white transform rotate-180 text-2xl rounded-lg p-[0.5rem] bg-zinc-100 text-zinc-500'><MdArrowForwardIos /></button>
                    <button className='custom-next shadow-[0_0_4px_rgba(0,0,0,0.3)] hover:bg-gradient-to-b hover:from-pink-400 hover:to-pink-500 hover:text-white text-2xl rounded-lg p-[0.5rem] bg-zinc-100 text-zinc-500'><MdArrowForwardIos /></button>
                </div>

                <Swiper 
                navigation={{
                    nextEl:".custom-next",
                    prevEl:".custom-prev"
                }}

                loop={true}

                breakpoints={{
                    640:{slidesPerView:1,spaceBetween: 20},
                    760:{slidesPerView:2,spaceBetween: 20},
                    1024:{slidesPerView:3,spaceBetween: 20},
                }}

                modules={[Navigation]} className="mt-6 mySwiper">
                    {review.map(item => {
                        return (
                            <SwiperSlide className='flex flex-col  bg-zinc-100 rounded-xl p-[1rem]' key={item.id}>
                                <div className='flex items-center gap-[1rem]'>
                                    <div className='rounded-full h-16 w-16 p-0.5 border-2 border-dotted border-pink-500 flex items-center justify-center'>
                                        <img src={item.image} className='h-full w-full rounded-full object-contain'/>
                                    </div>
                                    <div className=''>
                                        <h3 className='font-bold text-xl'>{item.name}</h3>
                                        <p className='text-zinc-500'>{item.profession}</p>
                                        <span className='flex text-yellow-400 text-lg'>
                                            {
                                                Array.from({length:item.rating},(_,index)=>(
                                                  <AiFillStar key={index}/>
                                                ))
                                            }
                                        </span>
                                    </div>

                                </div>
                                <p className='text-zinc-500 min-h-[15vh] mt-5'>{item.para}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>

        </section>
    )
}

export default Testimonials

const review = [
    {
        id: 1,
        name: 'Emily Johnsen',
        profession: 'Food Blogger',
        rating: 3,
        para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
        image: Customer1,
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 4,
        para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
        image: Customer2,
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 4,
        para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
        image: Customer3,
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 3,
        para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
        image: Customer4,
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 5,
        para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
        image: Customer5,
    },
]