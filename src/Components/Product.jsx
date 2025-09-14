import React, { useState } from 'react';

function Product({ title, category, image, price, IsInCart, ToggleCart, id }) {

    return (
        <div className="bg-[#555] w-full m-5 rounded-lg text-white p-4 flex flex-col items-center hover:scale-[1.1] transition-all duration-500 ease-in-out hover:brightness-120 hover:rotate-x-12 hover:rotate-y-12">
            <img src={image} alt={title} className="h-40 w-40 object-contain mb-4 rounded" />
            <h1 className="text-lg font-bold mb-2">{title}</h1>
            <p className="text-sm text-zinc-300 mb-1">{category}</p>
            <p className="text-base font-semibold mb-2">₹{Math.floor(price * 88.27)}</p>

            <button
                onClick={() => ToggleCart(id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-bold py-2 px-6 rounded transition-colors duration-200 ease-in-out shadow-md mt-2 hover:bg-gradient-to-r from-green-400 to-green-600 hover:rotate-x-12 "
            >
                {IsInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

export default Product;