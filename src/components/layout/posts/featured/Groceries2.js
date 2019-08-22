import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Supermarket from "./Supermarket";
import { makeStyles } from "@material-ui/core/styles";
import parkNShopImg from "./internationalParkNShop.png";
import wellcomeImg from "../../../../images/posts/supermarkets/wellcome.png";
import vanguardImg from "../../../../images/posts/supermarkets/vanguard.png";
const parknshopGeoCoords = { lat: 22.298201, lng: 114.172474 };
const wellcomeGeoCoords = { lat: 22.3009595, lng: 114.1742452 };
const vanguardGeoCoords = { lat: 22.298507, lng: 114.174177 };
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const Groceries = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <h1>Nearby Supermarkets</h1>
      </Container>
      <hr />
      <Container>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Groceries;
