import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import acIcon from "../../../images/rooms/icons/aircon.svg";
import hairdryerIcon from "../../../images/rooms/icons/hairdryer.svg";
import TowelCard from "./features/TowelCard";
import BottledwaterCard from "./features/BottledwaterCard";
import AirconCard from "./features/AirconCard";
import BathroomCard from "./features/BathroomCard";
import HairdryerCard from "./features/HairdryerCard";
import TvCard from "./features/tvCard";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

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
            <AirconCard />
          </Grid>
          <Grid item xs={2}>
            <BathroomCard />
          </Grid>
          <Grid item xs={2}>
            <HairdryerCard />
          </Grid>
          <Grid item xs={2}>
            <TvCard />
          </Grid>
          <Grid item xs={2}>
            <TowelCard />
          </Grid>
          <Grid item xs={2}>
            <BottledwaterCard />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RoomsFeature;
