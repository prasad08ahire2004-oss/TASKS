import React from 'react'
import tshirt from '../../assets/t-shirt.png'
import shoes from '../../assets/shoes.png'

const Hero = () => {
  return (
    <section className='mt-6 h-125 rounded-3xl'>

        <div className='flex gap-25 h-full'>

            <div className='w-1/2 bg-zinc-900 px-7 py-7 rounded-2xl'>
                <div className='text-sm text-white h-9.5 w-46 bg-zinc-800 rounded-full font-medium flex items-center justify-center'>
                    <p>New Season Collections</p>
                </div>

                <div className='mt-6'>
                    <h1 className='text-white mb-1.5 text-4xl font-bold'>
                        Elevate your everyday with curated essentials.
                    </h1>

                    <small className='text-sm text-zinc-400'>
                        Discover premium home, tech, and lifestyle products designed to simplify routine and sharpen your space.
                    </small>
                </div>

                <div className='mt-1.5 h-19 w-96 gap-4 flex items-center justify-items-start'>

                    <button className="px-5 py-2 rounded-full bg-zinc-800 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-transform">
                        Shop Now
                    </button>

                    <button className="px-5 py-2 rounded-full bg-zinc-800 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-transform">
                        Explore More
                    </button>

                </div>

                <div className='mt-6 h-22 w-full py-1 flex gap-3'>

                    <div className='h-full w-40 bg-black rounded-2xl pt-2 pl-2.5'>

                        <p className='text-white text-2xl font-bold'>
                            120+
                        </p>

                        <small className='text-sm text-zinc-400'>
                            Curated brands
                        </small>

                    </div>

                    <div className='h-full w-40 bg-black rounded-2xl pt-2 pl-2.5'>

                        <p className='text-white text-2xl font-bold'>
                            24h
                        </p>

                        <small className='text-sm text-zinc-400'>
                            Fast dispatch
                        </small>

                    </div>

                    <div className='h-full w-40 bg-black rounded-2xl pt-2 pl-2.5'>

                        <p className='text-white text-2xl font-bold'>
                            4.5/5
                        </p>

                        <small className='text-sm text-zinc-400'>
                            Customer rating
                        </small>

                    </div>

                </div>

            </div>

            <div className='w-1/2 border flex flex-col gap-4'>

                <div className='h-[52%] bg-zinc-900 rounded-2xl px-7 py-3'>

                    <small className='text-zinc-400 ml-50'>
                        Personalize your feed
                    </small>

                    <p className='text-white text-2xl font-medium text-center'>
                        Smart shopping controls
                    </p>

                    <div className='w-full flex items-center justify-center gap-3'>

                        <div className='w-60 h-45 flex flex-col gap-3 mt-3'>

                            <div className='bg-black pl-5 rounded-2xl'>
                                <p className='text-white'>
                                    Free shipping
                                </p>

                                <small className='text-zinc-400'>
                                    Orders over $75
                                </small>
                            </div>

                            <div className='bg-black pl-5 rounded-2xl'>
                                <p className='text-white'>
                                    Free shipping
                                </p>

                                <small className='text-zinc-400'>
                                    Orders over $75
                                </small>
                            </div>

                            <div className='bg-black pl-5 rounded-2xl'>
                                <p className='text-white'>
                                    Free shipping
                                </p>

                                <small className='text-zinc-400'>
                                    Orders over $75
                                </small>
                            </div>

                        </div>

                        <div className='w-60 h-45 flex flex-col gap-3 mt-3'>

                            <div className='bg-black pl-5 rounded-2xl'>
                                <p className='text-white'>
                                    Free shipping
                                </p>

                                <small className='text-zinc-400'>
                                    Orders over $75
                                </small>
                            </div>

                            <div className='bg-black pl-5 rounded-2xl'>
                                <p className='text-white'>
                                    Free shipping
                                </p>

                                <small className='text-zinc-400'>
                                    Orders over $75
                                </small>
                            </div>

                            <div className='bg-black pl-5 rounded-2xl'>
                                <p className='text-white'>
                                    Free shipping
                                </p>

                                <small className='text-zinc-400'>
                                    Orders over $75
                                </small>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='h-[48%] bg-zinc-900 rounded-2xl p-3 flex flex-col gap-1'>

                    <div className='w-full h-16  flex items-center justify-between px-4 py-1 rounded-2xl'>

                        <div className='h-full w-40 flex flex-col pt-1'>
                            <small className='text-zinc-400'>
                                Trending now
                            </small>
                            <p className='text-white text-[20px] font-semibold'>
                                Best sellers
                            </p>

                        </div>

                        <button className="px-5 py-2 rounded-full  text-white font-medium cursor-pointer hover:bg-white hover:text-black     hover:scale-105 transition-transform">
                            View all
                        </button>


                    </div>

                    <div className='w-full h-16 bg-black flex items-center justify-between px-4 py-1 rounded-2xl'>

                        <div className='w-full h-full flex items-center justify-items-start gap-2'>

                            <div className='h-full w-auto'>

                                <img src={tshirt} alt="" className='h-full object-contain' />

                            </div>

                            <div>
                                <p className='text-white font-semibold'>
                                    Monto T-shirt
                                </p>
                                <small className='text-zinc-400'>
                                    Silky t-shirt
                                </small>
                            </div>

                        </div>

                        <div>
                            <p className='text-white font-semibold'>
                                $189
                            </p>
                        </div>

                    </div>

                    <div className='w-full h-16 bg-black flex items-center justify-between px-4 py-1 rounded-2xl'>

                        <div className='w-full h-full flex items-center justify-items-start gap-2'>

                            <div className='h-full w-auto'>

                                <img src={shoes} alt="" className='h-full object-contain' />

                            </div>

                            <div>
                                <p className='text-white font-semibold'>
                                    N8 Shoes
                                </p>
                                <small className='text-zinc-400'>
                                    Sporty feel and look
                                </small>
                            </div>

                        </div>

                        <div>
                            <p className='text-white font-semibold'>
                                $195
                            </p>
                        </div>

                    </div>

                

                </div>
                
            </div>

        </div>

    </section>
  )
}

export default Hero
