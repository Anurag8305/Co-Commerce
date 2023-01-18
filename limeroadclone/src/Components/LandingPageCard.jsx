import React from "react";
import { BsWhatsapp, BsHeart } from "react-icons/bs";
import "../Components/LandingPageCard.css";

const LandingPageCard = () => {
	return (
		<div>
			<div className="card">
				<h6>TRENDING THIS YEAR</h6>
				<img
					src="https://img0.junaroad.com/stories/story_p_63b7f02113cb38082a015356-1673860390.jpeg"
					alt="cards"
				/>
				<div className="logo">
					<BsHeart />
					<BsWhatsapp />
				</div>
				<div className="bottom">
					<div className="author">
						<p>
							By <b>Anujabofficial</b>
						</p>
						<p>404 followers</p>
					</div>
					<div className="share">
						<p>95likes</p>
						<p>Share</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPageCard;
