import React, { useContext, useRef } from 'react';
import classes from '../../styles/Meals.module.css';
import MealItem from './MealItem';
// import { CartContext } from '../../context/Context';
import fiftyBImg from '../../assets/50blue.png';
import MacuImg from '../../assets/macu.png';
import FiveImg from '../../assets/5min.png';
import MilkshaImg from '../../assets/Milksha.jpg';
import { FiftyB } from '../../DummyData/FiftyB';
import { BannerImg } from '../../DummyData/bannerImg';
import Banner from './Banner';

import {Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import styled from 'styled-components';

function Meals() {
  // const { mealItem } = useContext(CartContext);
  const swiperRef = useRef();
  const A = styled.div`
  .swiper{
    padding-top:50px;
    padding-bottom:80px;
  }
  .swiper .swiper-slide{
    width:30vw !important;
    ${'' /* height:200px; */}
  }
  `;
  return (
    <>
      <section className={classes.summary}>
        <Banner Popular={BannerImg}/>
      </section>
      <section className={classes.meals}>
      {/* TODO swiper */}
      <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      <A>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {
          FiftyB.map((meal,index) => (
            <SwiperSlide key={index} 
            >
              <img src={meal.img} alt={index} style={{width:'30vw',objectFit: 'contain'}}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </A>
        <div className={classes.card}>
          <ul>
          <img className={classes.brandIcon} src={fiftyBImg} alt="50b" />
          {FiftyB.map((meal,index) => (
              <MealItem
                id={meal.productNumber}
                name={meal.name}
                img={meal.img}
                price={meal.price}
                key={`50b${index}`}
              />
          ))}
          </ul>
        </div>
        <div className={classes.card}>
        {/* TODO 換資料 */}
          <ul>
          <img className={classes.brandIcon} src={MilkshaImg} alt="50b" />
          {FiftyB.map((meal,index) => (
              <MealItem
                id={meal.productNumber}
                name={meal.name}
                img={meal.img}
                price={meal.price}
                key={`Milksha${index}`}
              />
          ))}
          </ul>
        </div>
        <div className={classes.card}>
        {/* TODO 換資料 */}
          <ul>
          <img className={classes.brandIcon} src={FiveImg} alt="50b" />
          {FiftyB.map((meal,index) => (
              <MealItem
                id={meal.id}
                name={meal.name}
                img={meal.img}
                price={meal.price}
                key={`Five${index}`}
              />
          ))}
          </ul>
        </div>
        <div className={classes.card}>
        {/* TODO 換資料 */}
          <ul>
          <img className={classes.brandIcon} src={MacuImg} alt="50b" />
          {FiftyB.map((meal,index) => (
              <MealItem
                id={meal.id}
                name={meal.name}
                img={meal.img}
                price={meal.price}
                key={`Macu${index}`}
              />
          ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Meals;
