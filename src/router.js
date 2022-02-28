import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';

const BasicRoute = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}
export default BasicRoute;