import React from 'react'
import portfolioName from '../assets/portfolio-name.png'
import boy from '../assets/boy.png'

const Upper = () => {
  return (
    <main className='m-full h-full px-10 pt-2'>

        <nav className='w-full h-20 border-b border-[#D10014] flex items-center justify-between'>

            <div className='text-white flex flex-col'>
                <p className='text-[20px] font-semibold text-[#D10014] font-poppins'>
                    WEB DESIGNER
                </p>
                <p className='text-[20px] font-poppins'>
                    DIGITAL CREATOR
                </p>
            </div>

            <div className='text-white'>

                <p className="relative w-fit text-[20px] font-poppins cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 hover:scale-95">
                    AVAILABLE FOR FREELANCE
                </p>

            </div>

        </nav>

        <section className='w-full h-210 relative'>

            <div className='w-full h-170 bg-cover bg-center bg-no-repeat mt-2' style={{ backgroundImage: `url(${portfolioName})` }}>

            </div>

            <div className='w-full h-40 bg-black'>

            </div>

            <img src={boy} alt="" className='absolute bottom-1 left-75 w-5xl h-auto' />

            <div className='w-110 h-90 absolute bottom-43 left-10 text-white'>

                <p className='font-allura text-8xl'>
                    hello, I'm
                </p>

                <p className='font-bebas text-[180px] leading-35'>
                    RAYHAN <br /> ADITYA
                </p>
            </div>

            <div className='w-130 h-40 absolute bottom-1 left-10 text-white'>

                <p className='font-poppins text-[#D10014] text-4xl font-semibold'>
                    WEB DESIGNER & <br />UI/UX CREATOR
                </p>

                <p className='mt-1 font-light'>
                    I design and build stylish, user-focused web experiences that combine creativity with strategy.
                </p>
            </div>

            <div className='w-130 h-30 absolute bottom-1 right-10  pl-50 flex items-center justify-items-end'>

                <div className='h-full w-40'>
                    <p className='font-poppins text-[#D10014] text-5xl text-center py-6 font-semibold'>
                        3+
                    </p>
                </div>

                <div className='h-full'>

                    <p className='font-poppins text-white text-2xl  py-6 font-semibold'>
                        YEARS <br /> EXPERIENCE
                    </p>
                    
                </div>

            </div>

        </section>

        <hr  className='text-[#D10014]'/>

    </main>
  )
}

export default Upper
