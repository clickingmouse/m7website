import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
//import classes from "*.module.sass";

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
  width: "100%",
  height: "40%",
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
class MapContainer extends React.Component {
  render() {
    console.log("::");
    console.log(process.env.REACT_APP_GMAP_API);
    return (
      <div className={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            GOOGLE MAP
            <br />
            <Map
              google={this.props.google}
              zoom={18}
              style={mapStyles}
              initialCenter={{
                lat: 22.298606176308525,
                lng: 114.17228420963512
              }}
            >
              <Marker
                position={{
                  lat: 22.298606176308525,
                  lng: 114.17228420963512
                }}
              />
            </Map>
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAP_API
})(MapContainer);
