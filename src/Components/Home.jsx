import React from 'react'
import Product from './Product'
import { UNSAFE_shouldHydrateRouteLoader } from 'react-router-dom'
import Loader from './Loader'

const Home = ({ Products, ToggleCart }) => {
    return (
        <div className="h-full w-[95%] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Products.length > 0 ? (
                Products.map(prd => (
                    <Product
                        key={prd.id}
                        {...prd}
                        ToggleCart={ToggleCart}
                    />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};


export default Home