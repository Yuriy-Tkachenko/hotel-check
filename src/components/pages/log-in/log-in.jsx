import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Wrapper, UserForm, StyledLabel, StyledInput } from "./styles";
import { MainTitle } from "../../ui/title/title";
import { StyledButton } from "../../ui/button/styles";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if(emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Введен некорректный email');

      if(!e.target.value) {
        setEmailError('');
      }
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if(e.target.value.length < 4 ||  e.target.value.length > 8) {
      setPasswordError('Длина пароля должна составлять не менее 3 и не более 8 знаков');

      if(!e.target.value) {
        setPasswordError('Поле не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  }

  const blurHandler = (e) => {
    // eslint-disable-next-line
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  return(
      <Wrapper>
        <UserForm type="submit">
          <MainTitle style = {{marginBottom: '32px', textAlign: 'center'}}>Simple Hotel Check</MainTitle>
          {(emailDirty && emailError) && <div style={{ color: 'red', marginBottom: '10px' }}>{emailError}</div>}
          <StyledLabel for='login'>Логин</StyledLabel>
          <StyledInput onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} id='login' name='email' type='text' style = {{marginBottom: '24px'}} />
          {(passwordDirty && passwordError) && <div style={{ color: 'red', marginBottom: '10px' }}>{passwordError}</div>}
          <StyledLabel for='password'>Пароль</StyledLabel>
          <StyledInput onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} id='password' name='password' type='password' style = {{marginBottom: '24px'}} />
          <Link to='/order.html'>
            <StyledButton disabled={!formValid}>Войти</StyledButton>
          </Link>
        </UserForm>
      </Wrapper>
  )
}