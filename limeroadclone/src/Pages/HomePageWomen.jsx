import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LandingPageCard from "../Components/LandingPageCard";
import Navbar from "../Components/Navbar";
import "./HomePage.css";
import axios from "axios";

const HomePageWomen = () => {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(9);

	const getData = () => {
		axios
			.get(`https://unit-5backend.onrender.com/LandingWomen?_limit=${limit}`)
			.then((res) => {
				setData(res.data);
			});
	};
	const handleLimit=()=>{
		if(limit>50){
			setLimit(9);
		}
		else{
			setLimit((prev)=>prev+3)
		}
	}
	useEffect(() => {
		getData();
	}, [limit]);
	return (
        <div>
            	<div id="navbar">
				<Navbar/>
			</div>
		<div>
			<Navbar />
			<div className="product_container">
				{data?.map((el) => {
					return (
						<LandingPageCard
							designer={el.designer}
							followers={el.followers}
							id={el.id}
							image={el.image}
							likes={el.likes}
						/>
					);
				})}
			</div>
			<button className="homebtn" onClick={handleLimit}>Load More</button>
		</div>
        </div>
	);
};

export default HomePageWomen;