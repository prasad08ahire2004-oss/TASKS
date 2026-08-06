import React from 'react'


const Middle = () => {
  return (
    <main className='m-full h-full px-10 pt-2'>

        <section className='w-full h-200 bg-black'>

          <section className='w-full h-15 mt-2 flex items-center justify-center-safe'>

            <div className='h-15 w-50 text-white mr-3'>
              <p className='text-white text-[20px] font-poppins font-semibold text-center mt-3.5'>
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

          <section className='w-full h-90 border flex items-center justify-between'>

            <div className='w-[30.33%] h-85 border border-white'>

            </div>

            <div className='w-[30.33%] h-85 border border-white'>

            </div>

            <div className='w-[30.33%] h-85 border border-white'>

            </div>

          </section>

        </section>

    </main>
  )
}

export default Middle
