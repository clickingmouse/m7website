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

const OurRooms = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Our Rooms
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>Solo</Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>Two's</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Group</Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OurRooms;
