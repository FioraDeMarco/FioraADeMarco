import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Portfolio from "./Portfolio";

function Routes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/App' element={<App />} />
        <Route exact path='/Portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;
