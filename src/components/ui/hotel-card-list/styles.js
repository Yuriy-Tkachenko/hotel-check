import styled from "styled-components";
import { Swiper } from "swiper/react";

export const HotelSwiper = styled(Swiper)`
  height: 400px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;