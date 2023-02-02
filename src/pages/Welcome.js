import React from "react";
import "../styles/Welcome.css";
import image from "../assets/Afrotennis_white.png";

const Welcome = () => {
  return (
    <div>
      <img src={image} alt="logo" className="logo-welcome" />
      <button className="btn-welcome">ENTER</button>
    </div>
  );
};

export default Welcome;
