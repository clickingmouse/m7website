import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import classes from "*.module.sass";
import GettingHere from "./GettingHere";
import MapContainer from "./MapContainer";
import FromHKIA from "./FromHKIA";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const LocationWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      From Hong Kong International Airport
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Gettinghere />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            Map <br />
            <MapContainer />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <br />
            <FromHKIA />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LocationWrapper;
