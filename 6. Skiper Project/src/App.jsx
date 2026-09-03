import React from 'react'
import Swiper from 'swiper'
import SwiperSlide from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import 'swiper/css'

const App = () => {
  return (
    <>
    
      <main className='min-h-screen'>

        <Swiper  navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} className="mySwiper">

          <SwiperSlide>
            <h1>Slide 1</h1>
          </SwiperSlide>

          <SwiperSlide>
            <h1>Slide 2</h1>
          </SwiperSlide>

        </Swiper>

      </main>

    </>
  )
}

export default App
