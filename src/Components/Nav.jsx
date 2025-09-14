import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='w-full h-12 bg-[#333] py-2 px-5 font-bold text-white flex items-center justify-around text-xs rounded-lg md:text-lg max-w-[1560px] m-auto'>
      <h1 className=' mr-[25%] text-2xl  text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-green-400 bg-clip-text md:mr-[50%]'>FakeStore</h1>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `${isActive ? "text-yellow-400 font-bold" : ""}`
        }
        
        >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold" : ""
        }
        to='/Cart' > Cart </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold " : ""
        }
        to='/Checkout'>Checkout </NavLink>
    </nav>
  )
}

export default Nav