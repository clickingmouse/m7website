import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import MapContainer from "./MapContainer";
import FromHKIA from "./FromHKIA";

import entrance from "../../../images/location/majestic-house-entrance.jpg";
import outrance from "../../../images/location/majestic-house-entrance-outview.jpg";

const locationText =
  "Majestic7 Guesthouse is located in the heart of Tsim Sha Tsui on Nathan Road and Cameron Road. The building entrance, however, is on Cameron Road. Once you're in the lobby, go up the stairs and take the lift directly to the 7th Floor. Flat 7D is the first flat on the right.";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    //maxWidth: "100%",
    height: "auto",
    //maxHeight: "auto",
    objectFit: "contain"
  }
}));

const GettingHere = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      GETTING HERE SECTION
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            xs
            <br />
          </Paper>
          <img
            className={classes.img}
            src={entrance}
            alt="Majestic House Building Entrance"
          />
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
          <strong>Location</strong>
          <br />
          {locationText}
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
          <img
            className={classes.img}
            src={outrance}
            alt="Majestic House Building Entrance"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>XS=?</Paper>
          <div style={{ height: "400px" }}>
            <MapContainer />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <FromHKIA />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GettingHere;
