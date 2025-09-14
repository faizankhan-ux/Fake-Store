import React from 'react'
import Product from './Product'


const Cart = ({ Products }) => {
    return (
        <div className='h-full w-[95%] grid grid-cols-2 gap-5'>


            {Products.length > 0 ? (Products.map((prd, idx) => (
                 <Product title={prd.title} image={prd.image} price={prd.price} category={prd.category} description={prd.description} key={idx}
                    IsInCart={prd.IsInCart} />
            ))) : 
            (<div className=' h-[100vh] w-[100vw] flex items-center justify-center text-white'>
                <h1>No Items in the Cart</h1>
                <p>Please Add items to Cart to view them here </p>
            </div>)
            }



        </div>


    )
}

export default Cart