import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderProducts } from "../../data/products";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        className="mySwiper"
        modules={[Pagination, Navigation]}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="product-img" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
