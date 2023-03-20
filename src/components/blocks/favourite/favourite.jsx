import React from "react";
import Title from "../../ui/title/title";
import { Wrapper, RatingButton } from "./styles";

export default function Favourite() {
  return (
    <Wrapper>
      <Title style={{ marginBottom: '32px' }}>Избранное</Title>
      <div>
        <RatingButton style={{ marginRight: '8px' }}>Рейтинг</RatingButton>
        <RatingButton>Цена</RatingButton>
      </div>
    </Wrapper>
  )
}
