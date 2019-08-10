import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class tempGeoLocation extends Component {
//   static defaultProps = {
//     center: {
//       lat: 28.520830,
//       lng: -81.459330
//     },
//     zoom: 11
//   };

  constructor(props) {
      super(props);
      this.state = {
          chefs: [
              {
                  id: 1,
                  latitude: 21.520830,
                  longitude: 81.46894
                },
              {id: 2,
                latitude: 20.520824,
                longitude: 82.48385}
          ],
          center: {
            lat: 28.520830,
            lng: -81.459330
          },
          zoom: 11
      }
  }

    displayMarkers = () => {
        
        console.log( this.state.chefs.map((chef, index) => {
            console.log("markers should have loaded")
            console.log(chef);
            return <Marker key={index} position={{
                lat: chef.latitude,
                lng: chef.longitude
            }}
            
            onClick={() => console.log("You clicked me!")} />
        }))

    }
//   onComponentMount= () => {
//     findNearbyChefs()
//   }

  //findNearbyChefs = () => {
      //axios.get(...)
//   }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Map
          google={this.props.google}
        //   bootstrapURLKeys={{ key: 'AIzaSyArYUj_aKKGPm5FDl1dAf_CN_Ni62nkAMM'}}
          initialCenter={this.state.center}
          zoom={this.state.zoom}
        >
          {/* <Marker position={{ lat:28.520830, lng:-81.459330 }}
            // lat={28.520830}
            // lng={-81.459330}
            // text="My Marker"
          /> */}
          {this.state.chefs.map(chef => {
            console.log("markers should have loaded")
            console.log(chef);
            return <Marker key={chef.id} position={{
                lat: chef.latitude,
                lng: chef.longitude
            }}
            
            onClick={() => console.log("You clicked me!")} />
        })}
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({apiKey: 'AIzaSyArYUj_aKKGPm5FDl1dAf_CN_Ni62nkAMM'})(tempGeoLocation);