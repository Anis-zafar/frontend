import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/home";
import Login from "./../pages/login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import Tours from "./../pages/tour";
import TourDetails from "./../pages/tourDetails";
const routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/tours/search" element={<SearchResultList/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/tours/:id" element={<TourDetails/>} />
    </Routes>
  );
};

export default routers;
