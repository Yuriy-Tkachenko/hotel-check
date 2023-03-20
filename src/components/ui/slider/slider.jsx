import React from "react";
import images from "../../../mocks/images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView="3.5"
    >
      {images.map((image) => (
        <SwiperSlide key={image.image}>
          <img src={image.image1x} srcSet={image.image2x} alt={image.title} width={'164'} height={'149'}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}