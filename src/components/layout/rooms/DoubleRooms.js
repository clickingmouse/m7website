import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import DoubleCard from "./DoubleCard";
import TwinCard from "./TwinCard";
import QuadrupleCard from "./QuadrupleCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  tabBar: {
    padding: theme.spacing(1),
    id: "tabs",
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center"
  }
}));

const DoubleRooms = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
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
        </Grid>
      </Paper>
    </div>
  );
};

export default DoubleRooms;
