import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Mens from "../Pages/Mens";
import Payment from "../Pages/Payment";
import Women from "../Pages/Women";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/men" element={<Mens />} />
				<Route path="/women" element={<Women />} />
				<Route path="/homepage" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/payment" element={<Payment />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
