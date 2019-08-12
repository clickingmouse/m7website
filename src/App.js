import React, { Component } from "react";
//import Grid from "@material-ui/core/Grid";
import NavBar from "./components/navbar/NavBar";
import Landing from "./components/layout/landing/Landing";
import OurRooms from "./components/layout/rooms/OurRooms";
import Faq from "./components/layout/faq/Faq";
//import GettingHere from "./components/layout/location/GettingHere";
//import AroundUs from "./components/layout/activities/AroundUs";
import PostsSection from "./components/layout/posts/PostsSection";
import Footer from "./components/layout/footer/Footer";
//import Contact from "./components/layout/contact/Contact";
import Contact2 from "./components/layout/contact/Contact2";
import PostsPanel from "./components/layout/posts/PostsPanel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import PostsDashboard from "../src/components/layout/posts/dashboard/PostsDashboard";
import PostsDetails from "../src/components/layout/posts/dashboard/PostsDetails";
import SignIn from "../src/auth/SignIn";
import "./App.css";
//import LocationParallax from "./components/layout/location/LocationParallax";
import FerryParallax from "./components/layout/parallax/FerryParallax";

import CreatePost from "../src/components/layout/posts/dashboard/CreatePost";
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
        <Switch>
          <Route exact path="/posts" component={PostsPanel} />
          <Route path="/posts/:id" component={PostsDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/create" component={CreatePost} />
        </Switch>
        <Route exact path="/" component={PostsSection} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
