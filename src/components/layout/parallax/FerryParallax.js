import React from "react";
import ferryImg from "../../../images/parallax/ferry02.jpg";
const FerryParallax = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          parallax
          <img
            src={ferryImg}
            style={{ height: "auto", width: "100%" }}
            alt="colorful ferry"
          />
        </div>
      </div>
    </div>
  );
};

export default FerryParallax;
