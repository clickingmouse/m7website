import React from "react";
import { Parallax, Background } from "react-parallax";
import choihungImg from "../../../images/location/choihung.jpg";
const LocationParallax = () => {
  return (
    <div>
      {/** 
      <div className="parallax-container">
        <div className="parallax">
          parallax
          <img
            src={choihungImg}
            style={{ height: "auto", width: "100%" }}
            alt="choi hung landmark"
          />
        </div>
      </div>
      */}
      <Parallax
        blur={0}
        bgImage={choihungImg}
        bgImageAlt="Choi Hung"
        strength={400}
      >
        {/** Put some text content here - even an empty div with fixed dimensions to
        have a height for the parallax.*/}
        <div style={{ height: "50vh" }} />
      </Parallax>
    </div>
  );
};

export default LocationParallax;
