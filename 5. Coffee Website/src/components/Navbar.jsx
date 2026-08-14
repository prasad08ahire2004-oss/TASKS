import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-white shadow-md'>
      
      <div>
        <h1>Bean & Brew</h1>
      </div>

      <div className='hidden md:block'>

        <div>
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

      <div>
        ☰
      </div>

    </nav>
  )
}

export default Navbar
