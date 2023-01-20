import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Mens from "../Pages/Mens";
import Payment from "../Pages/Payment";
import SignUp from "../Pages/SignUp";
import SingleProduct from "../Pages/SingleProduct";
import Women from "../Pages/Women";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/women" element={<Women />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
