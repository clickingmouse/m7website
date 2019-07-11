import React, { Component } from "react";

import NavBar from "./components/navbar/NavBar";
import Landing from "./components/layout/landing/Landing";
import GettingHere from "./components/layout/location/GettingHere";
import Footer from "./components/layout/footer/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />;
        <Landing />
        <GettingHere />
        <Footer />
      </div>
    );
  }
}

export default App;
