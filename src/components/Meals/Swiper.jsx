import React, {  useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import styled from 'styled-components';

function SwiperCard(data) {
    const swiperRef = useRef();
    const A = styled.div`
        .swiper{
            padding-top:50px;
            padding-bottom:80px;
        }
        .swiper .swiper-slide{
            width:300px !important;
            ${'' /* height:200px; */}
        }
    `;
  return (
    <A>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {
          data.map((meal,index) => (
            <SwiperSlide key={index} 
            >
              <img src={meal.img} alt={index} style={{height:'200px',objectFit: 'contain'}}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </A>
  )
}

export default SwiperCard;