import React from "react";
import choihungImg from "../../../images/location/choihung.jpg";
const LocationParallax = () => {
  return (
    <div>
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
    </div>
  );
};

export default LocationParallax;
