import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item sm={4}>
            <Container>
              <QuadrupleCard />
            </Container>
          </Grid>

          <Grid item sm={4}>
            <Container>
              <FamilyCard />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FamilyRooms;
