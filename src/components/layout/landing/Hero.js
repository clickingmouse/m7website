import React, { Component } from "react";
import tstArielImg from "../../../images/landing/Tsim_Sha_Tsui_Ariel.jpg";
const Hero = () => {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={tstArielImg} />
      </div>
    </div>
  );
};

export default Hero;
