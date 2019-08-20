import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
      <Container>
        <Grid container spacing={3}>
          <Grid item xs>
            <Container>
              <BudgetCard />
            </Container>
          </Grid>

          <Grid item xs>
            <Container>
              <SingleCard />
            </Container>
          </Grid>
          <Grid item xs>
            <Container>
              <DoubleCard />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SoloRooms;
