import React from "react";
import { GlobalStyle } from "./styles";
import LogIn from "../pages/log-in/log-in";
import Order from "../pages/order/order";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return(
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<LogIn />} />
          <Route path="order.html" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}