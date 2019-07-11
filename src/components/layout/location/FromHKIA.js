import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import classes from "*.module.sass";

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

const FromHKIA = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      From Hong Kong International Airport
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>LEFT</Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>RIGHT</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>LEFT</Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>RIGHT</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FromHKIA;
