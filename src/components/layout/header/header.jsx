import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainTitle } from "../../ui/title/title";
import { HeaderWrapper, ExitLink } from "./styles";
import { AuthContext } from "../../../context/index";

export default function Header() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return(
    <HeaderWrapper>
      <MainTitle>Simple Hotel Check</MainTitle>
      <button onClick={logout}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <ExitLink>Выйти</ExitLink>
        </Link>
      </button>
    </HeaderWrapper>
  )
}