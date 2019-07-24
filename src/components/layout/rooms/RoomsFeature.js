import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import acIcon from "../../../images/rooms/icons/aircon.svg";
import hairdryerIcon from "../../../images/rooms/icons/hairdryer.svg";

import AirconCard from "./features/AirconCard";
import BathroomCard from "./features/BathroomCard";
import HairdryerCard from "./features/HairdryerCard";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const RoomsFeature = () => {
  const classes = useStyles();
  return (
    <div className="row container">
      <h2 className="header">Features</h2>
      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <button className="btn btn-lg btn-primary btn-circle">
        <i className="fas fa-hotel fa-7x" />
      </button>

      <IconButton
        color="secondary"
        className={classes.button}
        aria-label="Add an"
      >
        <Icon>
          <i className="fas fa-wifi fa-7x" />
        </Icon>
      </IconButton>
      <Button
        style={{
          backgroundColor: "#5cb85c",
          color: "white"
        }}
      >
        <Icon className="classes.icon fa fa-plus-circle" />
      </Button>
      <Fab aria-label="Delete" className={classes.fab}>
        <i className="fas fa-snowflake fa-7x" />
      </Fab>

      <i className="fas fa-tv fa-7x" />
      <span
        className="circle"
        style={{ borderRadius: "50%", backgroundColor: "blue" }}
      >
        <i className="fas fa-wine-bottle fa-7x" />
      </span>
      <i className="fas fa-tv fa-7x" />
      <i className="fas fa-tv fa-7x" />

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <img src={acIcon} style={{ maxHeight: "100%", maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={1}>
            <img
              src={hairdryerIcon}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={1}>
            <i className="fas fa-tv fa-5x" />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <AirconCard />
          </Grid>
          <Grid item xs={2}>
            <BathroomCard />
          </Grid>
          <Grid item xs={2}>
            <HairdryerCard />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RoomsFeature;
