import React, { Component, createRef } from "react";

class GoogleMap extends Component {
  googleMapRef = React.createRef();

  componentDidMount() {
    const googleScript = document.createElement("script");
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GMAP_API
    }&libraries=places`;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener("load", {
      //this.googleMap = this.createGoogleMap()
      //this.marker = this.createMarker()
    });
  }
  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 18,
      center: {
        lat: 22.298606176308525,
        lng: 114.17228420963512
      },
      disableDefaultUI: true
    });

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "99%", height: "99%" }}
      >
        A
      </div>
    );
  }
}

export default GoogleMap;
