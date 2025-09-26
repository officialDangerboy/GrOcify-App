import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../../Components/ProductsList/ProductList'
import Cards from '../Cards/Cards'


const CategoryPage = ({title, img, categories=[]}) => {

    const filterProducts = categories.includes('All') ? 
    ProductList : ProductList.filter(item=> categories.includes(item.category))

    const ProductsList = filterProducts.map(Product=>{
        return(
            <Cards key={Product.id} img={Product.image} price={Product.price} title={Product.name}/>
        )
    })

    return (
        <div key={title}>
            <Banner title={title} img={img} />
            <div className='max-w-[90vw] mx-auto my-15 grid grid-cols-4 gap-8 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[550px]:grid-cols-1'>
                {ProductsList}
            </div>
        </div>
    )
}

export default CategoryPage