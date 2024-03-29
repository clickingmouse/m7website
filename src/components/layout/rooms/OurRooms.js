import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//import Grid from "@material-ui/core/Grid";
import RoomsParrallax from "./RoomsParallax";
import LocationParallax from "../location/LocationParallax";
import RoomsFeatures from "./RoomsFeature";
import RoomsTabs from "./RoomsTabs";

//import classes from "*.module.sass";
//import BudgetCard from "./BudgetCard";
//import SingleCard from "./SingleCard";

//import DoubleCard from "./DoubleCard";
//import TwinCard from "./TwinCard";
//import QuadrupleCard from "./QuadrupleCard";
//import FamilyCard from "./FamilyCard";
/*
const roomsText =
  "All of our rooms have an attached (private) bathroom, air conditioner, free Wi-Fi, a flat screen TV, electric kettle, and hairdryer. Amenities include soap, shampoo, toothbrush and toothpaste. A fresh towel, clean linens, and hangers are provided. A bottle of water is complimentary for each guest and a communal fridge is available for you use." +
  "\n" +
  "We are a family-run guesthouse with native English, Chinese, & Tagalog speakers. We live on the same floor & monitor the guesthouse with security surveillance cameras. Each room has a lock, entrance to the reception requires a keycard, & entrance to the building after 11pm requires a key.";
*/
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  tabBar: {
    padding: theme.spacing(1),
    id: "tabs",
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center"
  }
}));

const OurRooms = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RoomsParrallax />

      <RoomsFeatures />
      <LocationParallax />
      <div id="rooms">
        <h5 style={{ textAlign: "center" }}>Our Rooms</h5>
      </div>
      <Paper className={classes.tabBar}>
        <RoomsTabs />
      </Paper>
    </div>
  );
};

export default OurRooms;
