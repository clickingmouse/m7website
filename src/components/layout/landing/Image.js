import React, { Component } from "react";
import { withController } from "react-scroll-parallax";
import tstArielImg from "../../../images/landing/Tsim_Sha_Tsui_Ariel.jpg";
class Image extends Component {
  handleLoad = () => {
    // updates cached values after image dimensions have loaded
    this.props.parallaxController.update();
  };

  render() {
    return <img src={this.props.src} onLoad={this.handleLoad} width="100%" />;
  }
}

export default withController(Image);
