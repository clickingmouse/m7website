import React, { Component } from "react";
import choihungImg from "../../../images/location/choihung.jpg";
const LocationParallax = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          parallax
          <img src={choihungImg} style={{ height: "auto", width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default LocationParallax;
