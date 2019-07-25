import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
//import classes from "*.module.sass";
import "./gmap.css";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const mapStyles = {
  width: "50vw",
  height: "100%",
  //height: "100%",
  // overflow: "hidden"
  position: "relative"
  //
  //display: "flex",
  //flexFlow: "row nowrap",
  //justifyContent: "center",
  //padding: 0
};

//const classes = useStyles();
//const MapContainer = () => {
class ContactMap extends React.Component {
  render() {
    console.log("::");
    console.log(process.env.REACT_APP_GMAP_API);
    return (
      <div
        id="mapdivwrapper"
        style={{ width: "100%", height: "99%", position: "relative" }}
      >
        ...
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: 22.298606176308525,
            lng: 114.17228420963512
          }}
          className="MAP"
          style={{ width: "100%", height: "99%", position: "relative" }}
        >
          <Marker
            position={{
              lat: 22.298606176308525,
              lng: 114.17228420963512
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAP_API
})(ContactMap);
