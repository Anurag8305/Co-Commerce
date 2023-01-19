import React from "react";
// import "./LandingPage.css";
import Typewriter from "typewriter-effect";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <img src={logo} alt="" />
      <div className="text">
        <h1>India's most loved</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ["fashion", "फैशन", "ఫ్యాషన్", "பேஷன்", "ফ্যাশন"],
              autoStart: true,
              loop: true,
            }}
          />
          <p>platform</p>
        </div>
      </div>
      <div className="btn">
        <Link to={"/homepage"}>
          <button>SHOP MEN</button>
        </Link>
        <Link to={"/homepage"}>
          <button>SHOP WOMEN</button>
        </Link>
      </div>

      <p>Have an account? Log in</p>
      <p>हिंदी में देखें</p>
    </div>
  );
};

export default LandingPage;
