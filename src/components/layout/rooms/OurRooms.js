import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RoomsParrallax from "./RoomsParallax";
import RoomsFeatures from "./RoomsFeature";
//import classes from "*.module.sass";
import BudgetCard from "./BudgetCard";
import SingleCard from "./SingleCard";

import DoubleCard from "./DoubleCard";
import TwinCard from "./TwinCard";
import QuadrupleCard from "./QuadrupleCard";
import FamilyCard from "./FamilyCard";

const roomsText =
  "All of our rooms have an attached (private) bathroom, air conditioner, free Wi-Fi, a flat screen TV, electric kettle, and hairdryer. Amenities include soap, shampoo, toothbrush and toothpaste. A fresh towel, clean linens, and hangers are provided. A bottle of water is complimentary for each guest and a communal fridge is available for you use." +
  "\n" +
  "We are a family-run guesthouse with native English, Chinese, & Tagalog speakers. We live on the same floor & monitor the guesthouse with security surveillance cameras. Each room has a lock, entrance to the reception requires a keycard, & entrance to the building after 11pm requires a key.";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const OurRooms = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RoomsParrallax />
      Our Rooms
      <RoomsFeatures />
      <br />
      {roomsText}
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <BudgetCard />
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <SingleCard />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <DoubleCard />
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <TwinCard />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <QuadrupleCard />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <FamilyCard />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OurRooms;
