import React, { useState, useEffect } from "react";
import HotelCard from "../hotel-card/hotel-card";
import { HotelSwiper } from "./styles";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function HotelCardList({hotels}) {

  return(
    <HotelSwiper
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      mousewheel
      pagination={{
        type: "fanction"
      }}
    >
      {hotels.map((hotel) => (
        <SwiperSlide key={hotel.id}>
          <HotelCard hotel={hotel}/>
        </SwiperSlide>
      ))}
    </HotelSwiper>
  )
}
