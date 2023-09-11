import React, {  useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import styled from 'styled-components';
import classes from '../../styles/Meals.module.css';
import MealItem from './MealItem';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const A = styled.div`
        .swiper .swiper-slide{
            width:300px !important;
            ${'' /* height:200px; */}
        }
    `;

function SwiperCard({data, img}) {
    const swiperRef = useRef();
  return (
  <A className={classes.A}>
    <button className={classes.prevBtn} 
    onClick={() => swiperRef.current?.slidePrev()}>
    <BsChevronLeft/>
    </button>
      
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
    <button className={classes.nextBtn} 
    onClick={() => swiperRef.current?.slideNext()}>
    <BsChevronRight/>
    </button>
  </A>

  )
}

export default SwiperCard;