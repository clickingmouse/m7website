import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/navbar/NavBar";
import Landing from "./components/layout/landing/Landing";
import OurRooms from "./components/layout/rooms/OurRooms";
import GettingHere from "./components/layout/location/GettingHere";
import AroundUs from "./components/layout/activities/AroundUs";
import Footer from "./components/layout/footer/Footer";
import Contact from "./components/layout/contact/Contact"
import "./App.css";

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_TEST);
    console.log(process.env.NODE_ENV);
    return (
      <div>
        <NavBar />;
        <Landing />
        <OurRooms />
        <GettingHere />
        <AroundUs />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
