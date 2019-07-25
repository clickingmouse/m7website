import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    <div>
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
                  center: { lat: 41.0082, lng: 28.9784 },
                  zoom: 8
                }}
                onMapLoad={map => {
                  var marker = new window.google.maps.Marker({
                    position: { lat: 41.0082, lng: 28.9784 },
                    map: map,
                    title: "Hello Istanbul!"
                  });
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>ADDRESS:</Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Contact;
