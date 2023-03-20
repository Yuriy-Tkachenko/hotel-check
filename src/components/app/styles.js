import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
  }
  
  body {
    position: relative;
    width: 100%;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #333333;
    box-sizing: border-box;
  }
`