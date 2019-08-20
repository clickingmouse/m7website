import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import GroceryMap from "./GroceryMap";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    Width: "auto"
  },
  image: {
    width: "auto",
    height: "auto"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const parknshopcoords = { lat: 22.298201, lng: 114.172474 };
const m7coords = { lat: 22.298606176308525, lng: 114.17228420963512 };
const Supermarket = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="shop front" src={props.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={5} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <GroceryMap
              id="myMap3"
              destinationcoords={parknshopcoords}
              options={{
                center: { lat: 22.298606176308525, lng: 114.17228420963512 },
                zoom: 17
              }}
              onMapLoad={map => {
                var marker = new window.google.maps.Marker({
                  position: {
                    lat: 22.298606176308525,
                    lng: 114.17228420963512
                  },
                  map: map,
                  title: "Hello !"
                });
                var marke2 = new window.google.maps.Marker({
                  icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  },
                  position: parknshopcoords,
                  map: map,
                  title: "Hello !"
                });
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Supermarket;
