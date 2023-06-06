import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import AppRouter from "../AppRouter/AppRouter";
import { AuthContext } from "../../context/index";


export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth, 
      isLoading
    }} >
      <BrowserRouter>
        <GlobalStyle />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}