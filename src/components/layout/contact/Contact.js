import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContactDirections from "./ContactDirections";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ContactMap from "./ContactMap";
import GoogleMap from "./GoogleMap";
import Map from "./Map";
import Map2 from "./Map2";
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
const Contact = () => {
  const classes = useStyles();
  return (
    <div id="here">
      --== Contact Section ==--
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={classes.paper} style={{ height: "50vh" }}>
              MAP
              <Map
                id="myMap"
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
          <Grid item xs>
            <Paper className={classes.paper}>
              ADDRESS:
              <ContactDirections />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Contact;
