import React, { Component } from "react";
import quarryBayImg from "../../../images/rooms/quarrybay.jpg";
const RoomsParrallax = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={quarryBayImg} />
        </div>
      </div>
    </div>
  );
};

export default RoomsParrallax;
