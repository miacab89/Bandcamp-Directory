import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import './style.css';


const mapStyles = {
  width: '100%',
  height: '50%'
};

const { uniqueTitle } = ""; 

export class MapContainer extends Component {
  render() {
    return (
      <div className="map">
        <object 
        src="https://maps.googleapis.com/maps/api/js?key=REACT_APP_API_KEY&callback=initMap&libraries=&v=weekly" 
        title={uniqueTitle}>
            <Map
            google={this.props.google}
            zoom={14}
            center={14}
            style={mapStyles}
            initialCenter={
              {
                lat: -1.2884,
                lng: 36.8233
              }
            }
          />
        </object>
        
      </div>
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY, 
})(MapContainer);

