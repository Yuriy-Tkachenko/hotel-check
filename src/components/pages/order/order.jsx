import React from "react";
import Header from "../../layout/header/header";
import Filter from "../../blocks/filter/filter";
import Favourite from "../../blocks/favourite/favourite";
import Panel from "../../blocks/panel/panel";
import { Wrapper, Container, LeftColumn, RightColumn } from "./styles";
import hotels from "../../../mocks/hotels";

export default function Order() {
  return(
    <Wrapper>
      <Header />
      <Container>
        <LeftColumn>
          <Filter />
          <Favourite />
        </LeftColumn>
        <RightColumn>
          <Panel hotels={hotels} />
        </RightColumn>
      </Container>
    </Wrapper>
  )
}
