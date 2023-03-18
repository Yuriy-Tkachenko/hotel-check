import React from "react"
import { Wrapper, UserForm, StyledLabel, StyledInput } from "./styles";
import { MainTitle } from "../../ui/title/title";
import { StyledButton } from "../../ui/button/styles";

export default function LogIn() {
  return(
    <>
      <Wrapper>
        <UserForm type="submit">
          <MainTitle style = {{marginBottom: "32px", textAlign: "center"}}>Simple Hotel Check</MainTitle>
          <StyledLabel for="login">Логин</StyledLabel>
          <StyledInput id="login" type="text" style = {{marginBottom: "24px"}}/>
          <StyledLabel for="password">Пароль</StyledLabel>
          <StyledInput id="password" type="password" style = {{marginBottom: "24px"}}/>
          <StyledButton>Войти</StyledButton>
        </UserForm>
      </Wrapper>
    </>
  )
}