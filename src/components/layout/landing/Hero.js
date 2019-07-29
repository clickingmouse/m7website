import React from "react";
import tstArielImg from "../../../images/landing/Tsim_Sha_Tsui_Ariel.jpg";
const Hero = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={tstArielImg} />
        </div>
      </div>
      {/*
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
*/}
    </div>
  );
};

export default Hero;
