import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TowelCard from "./features/TowelCard";
import BottledwaterCard from "./features/BottledwaterCard";
import AirconCard from "./features/AirconCard";
import BathroomCard from "./features/BathroomCard";
import HairdryerCard from "./features/HairdryerCard";
import TvCard from "./features/tvCard";
import RefrigeratorCard from "./features/RefrigeratorCard";
import KettleCard from "./features/KettleCard";
import RackhangerCard from "./features/RackhangerCard";
import WifiCard from "./features/WifiCard";
import ToothCard from "./features/ToothCard";
import SoapCard from "./features/SoapCard";
import ToiletriesCard from "./features/ToiletriesCard";
import MapsCard from "./features/MapsCard";

import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import teal from "@material-ui/core/colors/teal";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import pink from "@material-ui/core/colors/pink";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const RoomsFeature = () => {
  const classes = useStyles();
  return (
    <div className="row container">
      <h2 className="header">Features</h2>

      <Paper className={classes.paper}>
        <Grid container spacing={2} style={{ padding: 10 }}>
          <Grid item xs={4} sm={2}>
            <WifiCard color={blue[800]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <AirconCard color={orange[400]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <BathroomCard color={blue[400]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TvCard color={red[400]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TowelCard color={yellow["A400"]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <ToiletriesCard color={green[900]} />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ padding: 10 }}>
          <Grid item xs={4} sm={2}>
            <MapsCard color={green[900]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <HairdryerCard color={teal["300"]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <RackhangerCard color={deepOrange[500]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <BottledwaterCard color={lightBlue[100]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <RefrigeratorCard color={deepOrange[100]} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <KettleCard color={red[600]} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RoomsFeature;
