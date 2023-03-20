import React from "react";
import { Wrapper, HotelName, Date, LikeButton, Description, Price, Star } from "./styles";

export default function HotelCard({ hotel }) {

  return (
    <Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={hotel.image} alt="Логотип дома" style={{ marginRight: '24px' }} width={'35px'} height={'35px'} />
        <div>
          <HotelName>{hotel.title}</HotelName>
          <Date>7 июля 2020 - 1 день</Date>
          <div style={{ display: 'flex' }}>
            <Star src={hotel.star1}/>
            <Star src={hotel.star2}/>
            <Star src={hotel.star3}/>
            <Star src={hotel.star4}/>
            <Star src={hotel.star5}/>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'right', marginRight: '16px'}}>
        <LikeButton />
        <div>
          <Description>Price:</Description>
          <Price>{hotel.price}</Price>
        </div>
      </div>
    </Wrapper>
  )
}