import React from 'react';
import Home from '../pages/Home';
import { Routes, Route, } from "react-router-dom";

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
};

export default Routers;