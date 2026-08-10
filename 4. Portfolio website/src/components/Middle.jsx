import React from 'react'
import cycle from '../assets/cycle.png'
import furniture from '../assets/furniture.png'
import girl from '../assets/girl.png'


const Middle = () => {
  return (
    <main className='m-full h-full px-10 pt-2'>

      <section className='w-full h-200 bg-black'>

        <section className='w-full h-15 mt-2 flex items-center justify-center-safe'>

            <div className='h-15 w-50 text-white mr-3'>
              <p className="relative w-fit text-[20px] font-poppins cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 hover:scale-95 text-center mt-3.5 font-semibold">
                SELECTED PROJECTS
              </p>
            </div>

            <hr className='text-white w-240'/>

            <div className='h-15 w-60 text-white ml-3 flex gap-1.5'>

              <div className='h-full w-50'>
                <p className="relative w-fit text-[20px] font-poppins cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 hover:scale-95 text-center mt-3.5 font-semibold">
                  VIEW ALL PROJECTS 
                </p>
              </div>

              <div className='h-full w-10 pb-3 text-white text-center cursor-pointer hover:scale-80 transition-all duration-300'>
                <span className='text-[35px] font-bold'>→</span>
              </div>

            </div>

        </section>

        <section className='w-full h-100 border flex items-center justify-between'>

            <div className='w-[30.33%] h-95 border'>

              <div className='w-full h-[70%] border border-zinc-800'>
                  <img src={cycle} alt="Cycle" className='w-full h-full object-contain' />
              </div>

              <div className='w-full h-[30%] flex items-center'>

                <div className='w-20 h-full flex flex-col justify-center'>

                  <p className='text-6xl font-medium font-bebas text-[#D10014]'>
                    01
                  </p>

                </div>

                <div className='w-50 h-full flex flex-col justify-center pl-4'>

                  <p className='text-3xl font-medium font-bebas text-white'>
                    VELOCE BIKES
                  </p>
                  <p className='font-bebas text-[15px] text-white'>
                    E-COMMERCE WEBSITE
                  </p>

                </div>

                <div className='w-30 h-full flex flex-col justify-center items-end'>

                  <div className='pb-3 text-white text-center cursor-pointer hover:scale-80 transition-all duration-300'>
                    <span className='text-[50px] font-bold'>→</span>
                  </div>

                </div>

              </div>

            </div>

            <div className='w-[30.33%] h-95'>

              <div className='w-full h-[70%] border border-zinc-800'>
                  <img src={furniture} alt="Furniture" className='w-full h-full object-contain' />
              </div>

              <div className='w-full h-[30%] flex items-center'>

                <div className='w-20 h-full flex flex-col justify-center'>

                  <p className='text-6xl font-medium font-bebas text-[#D10014]'>
                    02
                  </p>

                </div>

                <div className='w-50 h-full flex flex-col justify-center pl-4'>

                  <p className='text-3xl font-medium font-bebas text-white'>
                    WOODCRAFT
                  </p>
                  <p className='font-bebas text-[15px] text-white'>
                    FURNITURE WEBSITE
                  </p>

                </div>

                <div className='w-30 h-full flex flex-col justify-center items-end'>

                  <div className='pb-3 text-white text-center cursor-pointer hover:scale-80 transition-all duration-300'>
                    <span className='text-[50px] font-bold'>→</span>
                  </div>

                </div>

              </div>

            </div>

            <div className='w-[30.33%] h-95 border'>

              <div className='w-full h-[70%] border border-zinc-800'>
                  <img src={girl} alt="girl" className='w-full h-full object-contain' />
              </div>

              <div className='w-full h-[30%] flex items-center'>

                <div className='w-20 h-full flex flex-col justify-center'>

                  <p className='text-6xl font-medium font-bebas text-[#D10014]'>
                    03
                  </p>

                </div>

                <div className='w-50 h-full flex flex-col justify-center pl-4'>

                  <p className='text-3xl font-medium font-bebas text-white'>
                    URBANIC
                  </p>
                  <p className='font-bebas text-[15px] text-white'>
                    FASHION MAGZINE
                  </p>

                </div>

                <div className='w-30 h-full flex flex-col justify-center items-end'>

                  <div className='pb-3 text-white text-center cursor-pointer hover:scale-80 transition-all duration-300'>
                    <span className='text-[50px] font-bold'>→</span>
                  </div>

                </div>

              </div>

            </div>

        </section>

        <hr  className='text-[#D10014]'/>

      </section>

    </main>
  )
}

export default Middle
