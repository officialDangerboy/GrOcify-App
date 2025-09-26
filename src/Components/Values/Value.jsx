import { FaHeart, FaLeaf, FaSeedling, FaShield } from 'react-icons/fa6'
import BasketImg from '../../assets/basket-full-vegetables.png'
import Heading from '../Heading/Heading'

const Value = () => {

    const leftCon = values.slice(0,2).map(card => {
        return (
            <div key={card.id} className='flex max-[900px]:flex-row flex-row-reverse gap-[1rem] items-center'>
                <div className='text-3xl max-[600px]:text-xl max-[600px]:p-[0.5rem] text-white p-[0.7rem] rounded-full bg-gradient-to-b from-pink-400 to-pink-500'>
                    <span>{card.icon}</span>
                </div>
                <div className='text-right max-[900px]:text-left'>
                    <h3 className='max-[600px]:text-xl font-bold text-3xl'>{card.title}</h3>
                    <p className='max-[600px]:text-sm text-zinc-600 mt-1'>{card.para}</p>
                </div>
            </div>
        )
    })
    const rightCon = values.slice(2).map(card => {
        return (
            <div key={card.id} className='flex items-center gap-[1rem]'>
                <div className='max-[600px]:text-xl max-[600px]:p-[0.5rem] text-3xl text-white p-[0.7rem] rounded-full bg-gradient-to-b from-pink-400 to-pink-500'>
                    <span>{card.icon}</span>
                </div>
                <div className=''>
                    <h3 className='font-bold max-[600px]:text-xl text-3xl'>{card.title}</h3>
                    <p className='max-[600px]:text-sm text-zinc-600 mt-1'>{card.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[90vw] mx-auto'>
                <Heading Color='Our' Heading='Values' />

                <div className='flex mt-15 max-[600px]:mt-8 gap-[2rem] max-[900px]:flex-col md:gap-[1rem]'>

                    {/* left content */}
                    <div className='md:min-h-100 flex items-center flex-col md:justify-between gap-[3rem] '>
                        {leftCon}
                    </div>

                    {/* image div */}
                    <div className='w-1/2 mx-auto'>
                        <img src={BasketImg} />
                    </div>

                    {/* right content  */}
                    <div className='items-center md:min-h-100 flex flex-col md:justify-between gap-[3rem]'>                       
                        {rightCon}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Value

const values = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Saftey',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShield />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    },
]