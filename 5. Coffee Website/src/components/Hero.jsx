import React from 'react'
import coffee from '../assets/coffee.png'

const Hero = () => {
  return (
    <>
    
        <main className='w-full h-175 bg-amber-400'>

            {/* on mobile view this block will appear */}
            <div className='flex justify-center w-full h-175 bg-cover bg-center bg-no-repeat pt-20 px-0.5 md:hidden' 
                 style={{ backgroundImage: `url(${coffee})` }}
            >

                <div className=' w-full h-100'>

                    <div className='mb-2.5'>
                        <p className='text-center font-cursive text-5xl text-[#6d4528]'>
                            Good Coffee
                        </p>
                    </div>

                    <div className='mb-2'>
                        <p className='text-center font-heading text-6xl font-extrabold text-[#231308]'>
                            Brews Better <br /> Moments
                        </p>
                    </div>

                    <div className='mb-8'>
                        <p className='text-center text-[#6b3c1d] text-[18px]'>
                            Fresh beans, Great taste, A warmer, <br /> happier you
                        </p>
                    </div>

                    <div className='flex items-center justify-center gap-6'>

                        <button className='text-[#6d4528] border-2 border-[#6d4528] px-4 py-2 rounded-full text-[20px] font-medium active:scale-95 active:bg-[#6d4528] active:text-white'>
                            Explore Menu →
                        </button>

                        <button className='text-[#6d4528] border-2 border-[#6d4528] px-4 py-2 rounded-full text-[20px] font-medium active:scale-95 active:bg-[#6d4528] active:text-white'>
                            Learn More
                        </button>

                    </div>

                </div>

            </div>

            {/* on desktop view this block will appear */}
            <div className='hidden md:block'>

            </div>

        </main>
    
    </>
  )
}

export default Hero
