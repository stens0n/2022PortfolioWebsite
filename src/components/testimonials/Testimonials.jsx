import React, { useRef, useState } from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "This is a fake reveiw. test test test test test'test test test test test'test test test test test'",
  },

  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: "This is a fake reveiw. test test test test test'test test test test test'test test test test test'",
  },

  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: "This is a fake reveiw. test test test test test'test test test test test'test test test test test'",
  },

  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: "This is a fake reveiw. test test test test test'test test test test test'test test test test test'",
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>People of the Northshore</h5>
      <h2>on Kyle Davis</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      navigation={{ clickable: true }} modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar One'/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials