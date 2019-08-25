import React from "react";
import { Parallax, Background } from "react-parallax";
import quarryBayImg from "../../../images/rooms/quarrybay.jpg";
const RoomsParrallax = () => {
  return (
    <div>
      {/** 
      <div className="parallax-container">
        <div className="parallax">
          <img
            src={quarryBayImg}
            style={{ height: "auto", width: "100%" }}
            alt="quarry bay landmark"
          />
        </div>
      </div>
      */}
      <Parallax
        blur={0}
        bgImage={quarryBayImg}
        bgImageAlt="Transformer's battle landmark"
        strength={500}
      >
        {/*Put some text content here - even an empty div with fixed dimensions to
        have a height for the parallax.*/}
        <div style={{ height: "50vh" }} />
      </Parallax>
    </div>
  );
};

export default RoomsParrallax;
