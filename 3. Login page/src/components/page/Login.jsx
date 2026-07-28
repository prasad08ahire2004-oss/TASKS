import React from 'react'
import bgmist from '../../assets/bg-mist.png'
import catgirl from '../../assets/cat-girl.png'

const Login = () => {
  return (
    <section className='h-180 w-280 mx-auto flex relative'>

        <div className='h-180 w-140 border bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgmist})` }}>
            <img src={catgirl} alt="" className='h-184 w-3xl absolute -left-25 bottom-0.4' />
        </div>

        <div className='h-180 w-140 bg-[#0B0824] px-4 py-20 text-white'>

            <div className='flex'>

                <h1>
                    REGISTRATION /
                </h1>
                <h1>
                    LOGIN
                </h1>

            </div>

            <div>
                <div className='flex flex-col'>
                    <small>Email</small>
                    <input type="text" placeholder='Enter your email' />
                </div>

                <div className='flex flex-col'>
                    <small>Password</small>
                    <input type="text" placeholder='Enter your Password' />
                </div>
            </div>

            <div>
                <div>
                    <label>
                        <input type="checkbox"/>
                        I am 18 years old and I have read and accept Terms and Conditions.
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox"/>
                        I would like to receive emails about promotions.
                    </label>
                </div>
            </div>

            <div>
                <button>REGISTRATION</button>
            </div>

            <div>
                <small>or via social media network</small>
                <div>
                    social media icons
                </div>
            </div>

        </div>

    </section>
  )
}

export default Login
