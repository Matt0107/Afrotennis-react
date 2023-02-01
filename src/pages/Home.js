import React from "react";
import "../styles/Home.css";
import image from "../assets/Afrotennis_white.png";

const Home = () => {
  return (
    <div>
      <h1>COURT UNDER CONSTRUCTION</h1>
      <img src={image} alt="logo" className="logo-home" />
    </div>
  );
};

export default Home;
