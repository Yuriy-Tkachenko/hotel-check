import React from "react";
import { Link } from "react-router-dom";
import { MainTitle } from "../../ui/title/title";
import { HeaderWrapper, ExitLink } from "./styles";

export default function Header() {
  return(
    <HeaderWrapper>
      <MainTitle>Simple Hotel Check</MainTitle>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ExitLink>Выйти</ExitLink>
      </Link>
    </HeaderWrapper>
  )
}