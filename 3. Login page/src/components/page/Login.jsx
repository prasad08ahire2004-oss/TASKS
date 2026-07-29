import React from 'react'
import bgmist from '../../assets/bg-mist.png'
import catgirl from '../../assets/cat-girl.png'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <section className='h-180 w-280 mx-auto flex relative'>

        <div className='h-180 w-140 border bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgmist})` }}>
            <img src={catgirl} alt="" className='h-184 w-4xl absolute -left-45 bottom-0.4' />
        </div>

        <div className='h-180 w-140 bg-[#0B0824] px-30 text-white flex flex-col place-items-start justify-center gap-8'>

            <div className='flex'>

                <h1 className='font-semibold text-white text-[20px]'>
                    REGISTRATION /
                </h1>
                <h1 className='font-semibold text-white text-[20px]'>
                    LOGIN
                </h1>

            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <small className='text-[15px] font-sans'>Email</small>
                    <input type="text" placeholder='Enter your email' className='border border-[#2A3A57] w-80 h-8 pl-2 bg-[#111A2D]' />
                </div>

                <div className='flex flex-col gap-1'>
                    <small className='text-[15px] font-sans'>Password</small>
                    <input type="text" placeholder='Enter your Password' className='border border-[#2A3A57] w-80 h-8 pl-2 bg-[#111A2D]' />
                </div>
            </div>

            <div>
                <div>
                    <label className='flex gap-2'>
                        <input type="checkbox" className='' />
                        <div className='text-[14px] pt-5'>I am 18 years old and I have read and accept Terms and Conditions and Privacy policy.</div>
                    </label>
                </div>

                <div>
                    <label className='flex gap-2'>
                        <input type="checkbox"/>
                        <div className='text-[14px] pt-5'>I would like to receive emails about promotions and betting from loot boot.</div>
                    </label>
                </div>
            </div>

            <div>
                <button className='w-80 h-8 bg-[#20C8F2] font-bold'>
                    REGISTRATION
                </button>
            </div>

            <div className='flex flex-col gap-2'>
                <small className='pl-20'>or via social media network</small>
                <div className='flex gap-5 pl-8'>

                    <div className='w-12 h-12 bg-[#111A2D] rounded-full'>
                        <FcGoogle className='h-10 w-10 mx-auto pt-2' />
                    </div>

                    <div className='w-12 h-12 bg-[#111A2D] rounded-full'>
                        <FaFacebookF className='h-10 w-10 mx-auto pt-2' />
                    </div>

                    <div className='w-12 h-12 bg-[#111A2D] rounded-full'>
                        <FaXTwitter className='h-10 w-10 mx-auto pt-2' />
                    </div>

                    <div className='w-12 h-12 bg-[#111A2D] rounded-full'>
                        <FaGithub className='h-10 w-10 mx-auto pt-2' />
                    </div>

                </div>
            </div>

        </div>

    </section>
  )
}

export default Login
