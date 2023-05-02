import React from "react";
import css from "./Testmonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testmonials = () => {
  return (
    <div className={css.testmonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856:{
              slidesPerView: 3
            },
            640:{
              slidesPerView: 2
            },
            0:{
              slidesPerView: 1
            }

          }}
        >
          {TestimonialsData.map((testmonial, i) => (
            <SwiperSlide key={i}>
              <div className={css.testmonial}>
                <img src={testmonial.image} alt="" />
                <span>{testmonial.comment}</span>
                <hr />
                <span>{testmonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonials;
