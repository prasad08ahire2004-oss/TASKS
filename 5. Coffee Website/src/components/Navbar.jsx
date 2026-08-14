import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { HiOutlineHome } from "react-icons/hi"
import { HiOutlineMenu } from "react-icons/hi"
import { HiOutlineUser } from "react-icons/hi"
import { HiOutlineStar } from "react-icons/hi"
import { HiOutlineMail } from "react-icons/hi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ho ye raha hai hum ne ek variable banaya isMenuOpen naam ka. Ab jab bhi hum Hamburger icon click karte hai to agar isMenuOpen ki value agar false rahi tho vo true ho jati hai and vice-verca








  return (

    <>

      <nav className='w-full h-20 flex items-center justify-between bg-white px-4 shadow-md'>
      
        <div className='h-full w-40'>
          <img src={logo} alt="" className='w-full h-full object-contain'/>
        </div>

        <div className='hidden md:block'>

          <div className=''>
            <a href="#">Home</a>
          </div>

          <div>
            <a href="#">Menu</a>
          </div>

          <div>
            <a href="#">About</a>
          </div>

          <div>
            <a href="#">Reviews</a>
          </div>

          <div>
            <a href="#">Contact</a>
          </div>

        </div>

        <div className='hidden md:block'>
          <button>Order Now</button>
        </div>

        {/* Show hamburger only when menu is closed */}
        {!isMenuOpen && (
          <button
          className='text-3xl md:hidden'
          onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        )}
        

      </nav>



      {/* This Menu section is visible only in Mobile view */}

      <div
      className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out 
      ${ isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close Button => jab side menu open rahe ga tab ye button dikhega */}
        <div className='flex justify-end p-4'>
          <button
            className='text-3xl'
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* links */}
        <div className='w-full h-100 flex flex-col items-center'>

          <div className='flex w-58 h-15 items-center gap-4 text-[25px] active:text-[#3B2414] hover:text-[#3B2414]'>

            <HiOutlineHome className='active:text-[#3B2414] hover:text-[#3B2414]' />

            <div className='group relative w-fit'>
              <a href="#" className='active:text-[#3B2414] inline-block active:scale-95 hover:text-[#3B2414]'>Home</a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3B2414] transition-all duration-300 group-active:w-full"></span>
            </div>

          </div>

          <div className='flex w-58 h-15 items-center gap-4 text-[25px] active:text-[#3B2414] hover:text-[#3B2414]'>

            <HiOutlineMenu className='active:text-[#3B2414] hover:text-[#3B2414]' />

            <div className='group relative w-fit'>

              <a href="#" className='active:text-[#3B2414] inline-block active:scale-95 hover:text-[#3B2414]'>Menu</a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3B2414] transition-all duration-300 group-active:w-full"></span>

            </div>

          </div>

          <div className='flex w-58 h-15 items-center gap-4 text-[25px] active:text-[#3B2414] hover:text-[#3B2414]'>

            <HiOutlineUser className='active:text-[#3B2414] hover:text-[#3B2414]' />

            <div className='group relative w-fit'>

              <a href="#" className='active:text-[#3B2414] inline-block active:scale-95 hover:text-[#3B2414]'>About Us</a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3B2414] transition-all duration-300 group-active:w-full"></span>

            </div>

          </div>

          <div className='flex w-58 h-15 items-center gap-4 text-[25px] active:text-[#3B2414] hover:text-[#3B2414]'>

            <HiOutlineStar className='active:text-[#3B2414] hover:text-[#3B2414]' />

            <div className='group relative w-fit'>

              <a href="#" className='active:text-[#3B2414] inline-block active:scale-95 hover:text-[#3B2414]'>Review</a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3B2414] transition-all duration-300 group-active:w-full"></span>

            </div>

          </div>

          <div className='flex w-58 h-15 items-center gap-4 text-[25px] active:text-[#3B2414] hover:text-[#3B2414]'>

            <HiOutlineMail className='active:text-[#3B2414] hover:text-[#3B2414]' />

            <div className='group relative w-fit'>

              <a href="#" className='active:text-[#3B2414] inline-block active:scale-95 transition-transform duration-150 hover:text-[#3B2414]'>Contact</a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3B2414] transition-all duration-300 group-active:w-full"></span>

            </div>
            
          </div>

        </div>
        
      </div>


    </>
  )
}

export default Navbar
