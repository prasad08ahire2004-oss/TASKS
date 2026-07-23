import React from 'react'
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className='h-20 rounded-3xl border border-zinc-800 flex items-center justify-between px-6'>
        <img src={logo} alt="ShopX" className='h-full w-auto' />

        <div className='bg-zinc-800 px-7 py-3 rounded-2xl'>

            <ul className='flex gap-8 text-zinc-400'>

                <li className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
                    Home
                </li>

                <li className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
                    Shop
                </li>

                <li className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
                    Categories
                </li>

                <li className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
                    Deals
                </li>

                <li className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white">
                    Contacts
                </li>

            </ul>

        </div>

        <button className="px-5 py-2 rounded-full bg-white text-black font-medium cursor-pointer hover:scale-105 transition-transform">
            Sign In
        </button>
    </nav>
  )
}

export default Navbar
