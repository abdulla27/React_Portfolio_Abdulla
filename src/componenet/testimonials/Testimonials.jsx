import React from "react";
import "./testimonials.css";
import AVTR1 from "../../asset/AVTR1.jpeg";
import AVTR2 from "../../asset/AVTR2.jpeg";
import AVTR3 from "../../asset/AVTR3.jpeg";
import AVTR4 from "../../asset/AVTR4.jpeg";



import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:"Tina Snow",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rem!"
  },
  {
    avatar:AVTR2,
    name:"Charlett",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rem!"
  },
  {
    avatar:AVTR3,
    name:"Wanda",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rem!"
  },
  {
    avatar:AVTR4,
    name:"Kwame Gate",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rem!"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
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
