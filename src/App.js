import React, { Component } from "react";
//import Grid from "@material-ui/core/Grid";
import NavBar from "./components/navbar/NavBar";
import Landing from "./components/layout/landing/Landing";
import OurRooms from "./components/layout/rooms/OurRooms";
import Faq from "./components/layout/faq/Faq";
//import GettingHere from "./components/layout/location/GettingHere";
//import AroundUs from "./components/layout/activities/AroundUs";
import Footer from "./components/layout/footer/Footer";
//import Contact from "./components/layout/contact/Contact";
import Contact2 from "./components/layout/contact/Contact2";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
//import LocationParallax from "./components/layout/location/LocationParallax";
import FerryParallax from "./components/layout/parallax/FerryParallax";
class App extends Component {
  render() {
    console.log(process.env.REACT_APP_TEST);
    console.log(process.env.NODE_ENV);
    return (
      <div>
        <Route path="/" component={NavBar} />;
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={OurRooms} />
        <Route exact path="/" component={FerryParallax} />
        <Route exact path="/" component={Contact2} />
        <Route path="/faq" component={Faq} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
