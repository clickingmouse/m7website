import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContactDirections from "./ContactDirections";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import ContactMap from "./ContactMap";
//import GoogleMap from "./GoogleMap";
import Map2 from "./Map2";
//import MapOld from "./Map-notworking";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%"
  }
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div id="here">--== Majestic House ==--</div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          LEFT MAP
          <Paper className={classes.paper}>
            <Map2
              id="myMap2"
              options={{
                center: { lat: 22.298606176308525, lng: 114.17228420963512 },
                zoom: 14
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
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          RIGHT GUIDE
          <ContactDirections />
        </Grid>
      </Grid>
    </div>
  );
};
export default Contact;
