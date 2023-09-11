import React from 'react';
import classes from '../../styles/Meals.module.css';
import fiftyBImg from '../../assets/50blue.png';
import MacuImg from '../../assets/macu.png';
import FiveImg from '../../assets/5min.png';
import MilkshaImg from '../../assets/Milksha.jpg';
import { FiftyB } from '../../DummyData/FiftyB';
import { BannerImg } from '../../DummyData/bannerImg';
import Banner from './Banner';
import SwiperCard from './Swiper';

function Meals() {
  return (
    <>
      <section className={classes.summary}>
        <Banner Popular={BannerImg}/>
      </section>
      <section className={classes.meals}>
      {/* TODO swiper */}
        <SwiperCard data={FiftyB} img={fiftyBImg} />
        <SwiperCard data={FiftyB} img={MacuImg} />
        <SwiperCard data={FiftyB} img={FiveImg} />
        <SwiperCard data={FiftyB} img={MilkshaImg} />
        
      </section>
    </>
  );
}

export default Meals;
