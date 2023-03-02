import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import CartPage from "../Pages/CartPage";
import Edit from "../Pages/Edit";
import HomePage from "../Pages/HomePage";
import HomePageWomen from "../Pages/HomePageWomen";
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
        <Route path="/homepagewomen" element={<HomePageWomen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product/:id" element={<Edit />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;