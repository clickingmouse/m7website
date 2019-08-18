import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import DoubleCard from "./DoubleCard";
import TwinCard from "./TwinCard";
import QuadrupleCard from "./QuadrupleCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
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
      <Container>
        <Grid container spacing={0}>
          <Grid item xs>
            <Container>
              <DoubleCard />
            </Container>
          </Grid>

          <Grid item xs>
            <Container>
              <TwinCard />
            </Container>
          </Grid>
          <Grid item xs>
            <Container>
              <QuadrupleCard />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DoubleRooms;
