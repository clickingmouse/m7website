import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slider from "./Slider";

import victoriasferry from "../../../images/landing/victoriaharbourferry.jpg";
import victoriasPeakView from "../../../images/landing/VictoriasPeak.jpg";
import PeakTramView from "../../../images/landing/PeakTramView01.jpg";
const aboutText =
  "Conveniently located in the heart of Tsim Sha Tsui, Majestic 7 Guesthouse (formerly KAT Hotel) offers accommodation in one of Hong Kong's most vibrant neighborhoods. We are within a two-minute walk from the MTR Tsim Sha Tsui station, and within ten minutes walk from the Star Ferry and Kowloon Park, as well as near many shopping districts, night markets, food vendors, and museums. /n\n\t\b We are a family-run guesthouse and have native English, Cantonese and Tagalog speakers. Our affordable air-conditioned rooms are quietly situated on the seventh floor of an apartment building and each room has its own private, attached bathroom. It is the perfect base for an adventurous traveller!";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs</Paper>
          <img className={classes.img} src={victoriasferry} alt="hongkong" />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            xs=4
            <br />
            <strong>About</strong>
            <br />
            {aboutText}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs</Paper>
          <img
            className={classes.img}
            src={PeakTramView}
            alt="Hong Kong Peak View"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            xs=6 <br />
            What Our Guests Are Saying
            <center>
              <Slider />
            </center>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
