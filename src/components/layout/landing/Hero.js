import React from "react";
//import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";
import tstArielImg from "../../../images/landing/Tsim_Sha_Tsui_Ariel.jpg";
import Image from "./Image";

const Hero = () => {
  console.log("tst ariel parallax");
  return (
    <div>
      {/*
      <div className="parallax-container">
        <div className="parallax">
          <img src={tstArielImg} />
        </div>
      </div>
    */}
      <Parallax
        blur={0}
        bgImage={tstArielImg}
        bgImageAlt="Tsim Sha Tsui Ariel View"
        strength={200}
      >
        Put some text content here - even an empty div with fixed dimensions to
        have a height for the parallax.
        <div style={{ height: "50vh" }} />
      </Parallax>
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
