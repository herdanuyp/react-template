import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "75%",
  height: "75%"
};

class MapsDetailSpecifyEntry extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 1.2833754,
          lng: 103.8607264
        }}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCf0berdo2dHGeQBkwnKV7V5BU1T_dgnJ4"
})(MapsDetailSpecifyEntry);
