import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
class geoLocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [ //test marker
        {
          title: "The marker`s title should appear as a tooltip.", //currently doesn't
          name: "NAME",
          position: { lat: 28.513419, lng: -81 }
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng }
          }
        ]
      };
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">My Maps</h1>
        <Map
          google={this.props.google}
          style={{ width: "80%", margin: "auto" }}
          className={"map"}
          zoom={10}
          onClick={this.onClick}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyArYUj_aKKGPm5FDl1dAf_CN_Ni62nkAMM'})(geoLocationMap);