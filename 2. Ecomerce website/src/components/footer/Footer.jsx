import React from 'react'
import headphone from '../../assets/headphone.png'
import jacket from '../../assets/jacket.png'
import mobile from '../../assets/mobile.png'
import delivery from '../../assets/delivery.png'

const footer = () => {
  return (
    <section className='mt-6 h-105 w-full rounded-3xl flex items-center justify-center gap-20'>

        <div className='h-full w-[60%] bg-zinc-800 rounded-2xl p-3 flex flex-col gap-5'>

            <div className='w-full h-[20%] px-4 py-1.5 flex items-center justify-between'>

                <div className='h-full w-auto'>

                    <small className='text-zinc-400'>
                        Shop by categories
                    </small>
                    <p className='text-[20px] text-white font-semibold'>
                        Browse collections
                    </p>

                </div>

                <div className='h-full w-auto flex items-center justify-center py-1 px-2 bg-black rounded-2xl'>

                    <ul className='text-white flex items-center justify-center gap-4'>

                        <li className="px-5 py-2 rounded-full bg-zinc-800 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-transform">
                            All
                        </li>

                        <li className="px-5 py-2 rounded-full bg-zinc-800 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-transform">
                            Home
                        </li>

                        <li className="px-5 py-2 rounded-full bg-zinc-800 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-transform">
                            Tech
                        </li>

                        <li className="px-5 py-2 rounded-full bg-zinc-800 text-white font-medium cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-transform">
                            Style
                        </li>

                    </ul>

                </div>

            </div>

            <div className='w-full h-[80%] py-1.5 px-4 flex items-center justify-between'>

                <div className='h-79 w-[30.3%] bg-black rounded-2xl'>

                    <div className='rounded-t-lg'>

                        <img src={headphone} alt="" className='h-50 w-full object-contain rounded-t-lg' />

                    </div>
                    <div className='px-3 py-3 w-full h-[45%]'>
                        <p className='text-[20px] text-white font-semibold'>
                            Headphone
                        </p>
                        <small className='text-zinc-400'>
                            Improve the listening experience with BoAt 
                        </small>
                    </div>

                </div>

                <div className='h-79 w-[30.3%] bg-black rounded-2xl'>

                    <div className='rounded-t-lg'>

                        <img src={mobile} alt="" className='h-50 w-full rounded-t-lg' />

                    </div>
                    <div className='px-3 py-3 w-full'>
                        <p className='text-[20px] text-white font-semibold'>
                            Apple pro 17
                        </p>
                        <small className='text-zinc-400'>
                            Premium Experience 
                        </small>
                    </div>

                </div>

                <div className='h-full w-[30.3%] bg-black rounded-2xl'>

                    <div className='rounded-t-lg'>

                        <img src={jacket} alt="" className='h-50 w-full rounded-t-lg' />

                    </div>
                    <div className='px-3 py-3 w-full'>
                        <p className='text-[20px] text-white font-semibold'>
                            Renin Jacket
                        </p>
                        <small className='text-zinc-400'>
                            Feel warmth in winter.....
                        </small>
                    </div>

                </div>

            </div>

        </div>

        <div className='h-full w-[40%] bg-zinc-800 rounded-2xl p-8'>

            <div className='h-33 w-full'>

                <small className='text-zinc-400'>
                    Newsletter
                </small>

                <p className='text-[20px] text-white font-semibold mb-2.5'>
                    Get exclusive offers
                </p>

                <small className='text-zinc-400'>
                    Join our list for access to launches, private sales, and curated recommendation
                </small>

            </div>

            <div className='h-35 w-full flex flex-col items-center justify-center gap-4'>

                <input type="text" placeholder='Email address' className='bg-black text-zinc-400 px-3 py-2 w-full rounded-2xl' />

                <button className='bg-white text-black px-3 py-2 w-full rounded-2xl hover:scale-105 transition-transform'>
                    Subscribe
                </button>

            </div>

            <div className='h-20 w-full bg-black rounded-2xl p-3 flex gap-3'>

                <div className='h-full w-17 bg-amber-50 rounded-full'>

                    <img src={delivery} alt="" className='h-full w-full ' />

                </div>

                <div className='h-full w-35'>

                    <p className='text-[20px] text-white font-semibold'>
                        Free delivery
                    </p>
                    <small className='text-zinc-400'>
                        On order above $75
                    </small>

                </div>

            </div>

        </div>

    </section>
  )
}

export default footer
