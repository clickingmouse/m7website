import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//import classes from "*.module.sass";
import BudgetCard from "./BudgetCard";
import SingleCard from "./SingleCard";

import DoubleCard from "./DoubleCard";

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

const SoloRooms = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <BudgetCard />
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <SingleCard />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <DoubleCard />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SoloRooms;
