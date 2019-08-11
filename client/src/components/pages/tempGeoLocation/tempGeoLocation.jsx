import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export class tempGeoLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chefs: [{lat: 28.513170, lng: -81.514730},
              {latitude: 28.513170, longitude: -81},
              {latitude: 33, longitude: -88},
              {latitude: 26, longitude: -90},
              {latitude: 22, longitude: -84},
              {latitude: 20, longitude: -85}]
    }
  }

  displayMarkers = () => {
    return this.state.chefs.map((chef, index) => {
      return <Marker key={index} id={index} position={{
       lat: chef.latitude,
       lng: chef.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 28, lng: -81}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({apiKey: 'AIzaSyArYUj_aKKGPm5FDl1dAf_CN_Ni62nkAMM'})(tempGeoLocation);