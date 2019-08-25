import React from "react";
import { Parallax, Background } from "react-parallax";
import ferryImg from "../../../images/parallax/ferry02.jpg";
const FerryParallax = () => {
  return (
    <div>
      {/*}
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
*/}
      <Parallax
        blur={0}
        bgImage={ferryImg}
        bgImageAlt="The Night Star Ferry"
        strength={450}
      >
        {/*
        Put some text content here - even an empty div with fixed dimensions to
        have a height for the parallax.
        */}
        <div style={{ height: "50vh" }} />
      </Parallax>
    </div>
  );
};

export default FerryParallax;
