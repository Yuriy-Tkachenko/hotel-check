import React from "react";
import Slider from "../../ui/slider/slider";
import HotelCardList from "../../ui/hotel-card-list/hotel-card-list";
import { Wrapper, StyledTitle, Location, Date, FavouriteValue } from "./styles";

export default function Panel({hotels}) {
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
        <div>
          <StyledTitle style={{ position: 'relative' }}>Отели</StyledTitle>
          <Location>Москва</Location>
        </div>
        <Date>07 июля 2020</Date>
      </div>
      <Slider />
      <FavouriteValue>Добавлено в Избранное:</FavouriteValue>
      <HotelCardList hotels={hotels} />
    </Wrapper>
  )
}
