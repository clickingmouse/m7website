import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slider from "./Slider";
import Container from "@material-ui/core/Container";

import Hero from "./Hero";
import victoriasferry from "../../../images/landing/victoriaharbourferry.jpg";
import victoriasPeakView from "../../../images/landing/VictoriasPeak.jpg";
import PeakTramView from "../../../images/landing/PeakTramView01.jpg";
const aboutText =
  "Conveniently located in the heart of Tsim Sha Tsui, Majestic 7 Guesthouse (formerly KAT Hotel) offers accommodation in one of Hong Kong's most vibrant neighborhoods. We are within a two-minute walk from the MTR Tsim Sha Tsui station, and within ten minutes walk from the Star Ferry and Kowloon Park, as well as near many shopping districts, night markets, food vendors, and museums. /n\n\t\b We are a family-run guesthouse and have native English, Cantonese and Tagalog speakers. Our affordable air-conditioned rooms are quietly situated on the seventh floor of an apartment building and each room has its own private, attached bathroom. We live on the same floor & monitor the guesthouse with security surveillance cameras.  It is the perfect base for an adventurous traveller!";

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
      <Hero />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <br />
            <div className="row container">
              <h2 id="about" className="header" style={{ textAlign: "left" }}>
                About Us
              </h2>

              {aboutText}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
