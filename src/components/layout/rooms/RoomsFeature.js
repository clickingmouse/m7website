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
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <WifiCard />
          </Grid>
          <Grid item xs={2}>
            <AirconCard />
          </Grid>
          <Grid item xs={2}>
            <BathroomCard />
          </Grid>
          <Grid item xs={2}>
            <TvCard />
          </Grid>
          <Grid item xs={2}>
            <TowelCard />
          </Grid>
          <Grid item xs={2}>
            <RefrigeratorCard />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SoapCard />
          </Grid>
          <Grid item xs={2}>
            <HairdryerCard />
          </Grid>
          <Grid item xs={2}>
            <RackhangerCard />
          </Grid>
          <Grid item xs={2}>
            <BottledwaterCard />
          </Grid>
          <Grid item xs={2}>
            <ToothCard />
          </Grid>
          <Grid item xs={2}>
            <KettleCard />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RoomsFeature;
