import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Map from "./Map";
import FromHKIA from "./FromHKIA";

import entrance from "../../../images/location/majestic-house-entrance.jpg";
import outrance from "../../../images/location/majestic-house-entrance-outview.jpg";

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
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Map />
          </Paper>
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
