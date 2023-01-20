import React, { useEffect } from "react";
import LandingPageCard from "../Components/LandingPageCard";
import Navbar from "../Components/Navbar";
import "../../src/Pages/HomePage.css";
import { useState } from "react";
import axios from "axios";
const HomePageWomen = () => {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(9);

	const handleLimit = () => {

		if (limit > 50) {
			setLimit(9);
		} else {
			setLimit((prev) => prev + 3);
		}
	};
	const getData = () => {
		axios
			.get(`https://unit-5backend.onrender.com/LandingWomen?_limit=${limit}`)
			.then((res) => {
				setData(res.data);

			});
	};
	console.log(data);
	useEffect(() => {
		getData();
	}, [limit]);
	return (
		<div>
			<Navbar />
			<div className="product_container">
				{
					data?.map((el) => {
						return (
							<LandingPageCard
								key={el.id}
								image={el.image}
								designer={el.designer}
								followers={el.followers}
								likes={el.likes}
							/>
						);
					})
				}
			</div>
			<button className="homebtn" onClick={handleLimit}>
				Load More
			</button>
		</div>
	);
};

export default HomePageWomen;
