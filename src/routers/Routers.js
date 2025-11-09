import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import HouseListing from "../pages/HouseListing";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import HouseDetails from "../pages/HouseDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/houses" element={<HouseListing />} />
      <Route path="/house/:id" element={<HouseDetails />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
