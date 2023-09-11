import React, {  useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import styled from 'styled-components';
import classes from '../../styles/Meals.module.css';
import MealItem from './MealItem';

function SwiperCard({data, img}) {
    // TODO swiper
    const swiperRef = useRef();
    const A = styled.div`
        .swiper .swiper-slide{
            width:300px !important;
            ${'' /* height:200px; */}
        }
    `;
  return (
    <>
    
      <A><button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      
     <div className={classes.card}> 
     <img className={classes.brandIcon} src={img} alt="50b" />
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2}
      >
        <ul>
          {
            data.map((meal,index) => (
              <SwiperSlide key={index} >
                <MealItem
                  id={meal.productNumber}
                  name={meal.name}
                  img={meal.img}
                  price={meal.price}
                  key={`50b${index}`}
                />
              </SwiperSlide>
            ))
          }
          </ul>
        </Swiper>
      </div>
      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      </A>
    </>
  )
}

export default SwiperCard;