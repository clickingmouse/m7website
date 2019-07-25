import React, { Component, PropTypes } from "react";

class Gmap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      scrollwheel: true,
      zoom: 14,
      draggable: true,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
        style: google.maps.ZoomControlStyle.LARGE
      },
      center: new google.maps.LatLng(60.16985569999999, 24.938379)
    });

    this.props.onGetMap(this.map);
  }

  render() {
    const mapStyle = {
      height: "100%",
      width: "100%"
    };

    return <div ref="map" style={mapStyle} />;
  }
}

GoogleMap.propTypes = {
  onGetMap: PropTypes.func.isRequired
};
export default Gmap;
