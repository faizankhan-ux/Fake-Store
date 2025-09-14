import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

const App = () => {
     const [Products, setProducts] = useState([]);
     const [MyCart, setMyCart] = useState([]);

     async function GetProducts() {
          try {
               let res = await axios.get("https://fakestoreapi.com/products");
               setProducts(res.data);
          } catch (err) {
               console.log(err);
          }
     }

     // Toggle IsInCart for a specific product
     function ToggleCart(productId) {
          setProducts(prev =>
               prev.map(p =>
                    p.id === productId ? { ...p, IsInCart: !p.IsInCart } : p
               )
          );
     }

     

    

     useEffect(() => {
          setMyCart(Products.filter(p => p.IsInCart));
     }, [Products]);

     useEffect(() => {
          GetProducts();
     }, []);

     return (
          <Router>
               <div className="min-h-[100vh] w-screen bg-[#222] max-w-[1560px] mx-auto">
                    <Nav />
                    <Routes>
                         <Route path="/" element={<Home Products={Products} ToggleCart={ToggleCart} />} />
                         <Route path="/Cart" element={<Cart Products={MyCart} />} />
                         <Route path="/Checkout" element={<Checkout MyCart={MyCart} />} />
                    </Routes>
               </div>
          </Router>
     );
};

export default App 