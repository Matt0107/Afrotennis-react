import React from "react";
import "../styles/Welcome.css";
import image from "../assets/Afrotennis_white.png";

const Welcome = () => {
  return (
    <div>
      <img src={image} alt="logo" className="logo-welcome" />
      <a href="/Home">
        <button className="btn-welcome">ENTER</button>
      </a>
    </div>
  );
};

export default Welcome;
