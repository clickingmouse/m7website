import React, { Component } from "react";
//import { render } from "react-dom";
import { sizing } from "@material-ui/system";

class GroceryMap extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsDisplay = new window.google.maps.DirectionsRenderer();
    var M7 = new window.google.maps.LatLng(
      22.298606176308525,
      114.17228420963512
    );
    console.log(this.props.destinationcoords.lat);
    var parknshop = new window.google.maps.LatLng(this.props.destinationcoords);
    console.log(this.props.id);
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
    console.log("map directioning");
    directionsDisplay.setMap(map);
    console.log("finished map directions");
    ///////////////////////////////////////////
    function calcRoute() {
      //var start = document.getElementById("start").value;
      //var end = document.getElementById("end").value;
      var request = {
        origin: M7,
        destination: parknshop,
        travelMode: "WALKING"
      };
      directionsService.route(request, function(result, status) {
        if (status == "OK") {
          directionsDisplay.setDirections(result);
        }
      });
    }
    calcRoute();

    ///////////////////////////////////////////
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=${
        process.env.REACT_APP_GMAP_API
      }`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div
        style={{ width: "auto", height: "100%" }}
        id={this.props.id}
        className="mapClass"
      >
        ----------
      </div>
    );
  }
}

export default GroceryMap;
