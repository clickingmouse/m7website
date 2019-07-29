import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import QuadrupleCard from "./QuadrupleCard";
import FamilyCard from "./FamilyCard";

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

const FamilyRooms = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <QuadrupleCard />
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <FamilyCard />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FamilyRooms;
