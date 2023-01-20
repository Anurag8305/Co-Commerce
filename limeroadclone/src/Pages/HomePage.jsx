import React from "react";
import LandingPageCard from "../Components/LandingPageCard";
import Navbar from "../Components/Navbar";

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<LandingPageCard />
			<LandingPageCard />
			<LandingPageCard />
		</div>
	);
};

export default HomePage;
