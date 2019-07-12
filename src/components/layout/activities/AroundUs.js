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

const AroundUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Activities
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>IMG</Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>DESCR</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>IMG</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>DESCR</Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AroundUs;
