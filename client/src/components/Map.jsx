// Imports
import React, { Component } from 'react';

// Import React Script Library to load Google object
import Script from 'react-load-script';

class Map extends Component {
  constructor(props) {
    super(props);

    // Placeholder state
    this.state = {
   
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handleMapChange = this.handleMapChange.bind(this);

  }


  handleScriptLoad() {
    // Try HTML5 Geolocation
    if (navigator.geolocation) {
    
      navigator.geolocation.getCurrentPosition(
        position => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // Loads map
          let map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 13
          });
        }, () => {
          // If user denies geolocation info, default location is used
          this.handleLocationError(false)
        }
      )
    }

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));

    this.autocomplete.setFields(['address_components', 'formatted_address', 'geometry', 'icon', 'name']);
    
    this.autocomplete.addListener('place_changed', this.handleMapChange);
  }

  handleLocationError(browserHasGeolocation) {
    // Set default location to Sydney, Australia
    let pos = { lat: -33.856, lng: 151.215 };

    let map = new google.maps.Map(document.getElementById("map"), {
      center: pos,
      zoom: 15
    });
  }

  handleMapChange() {
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 13
    });

    let marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    marker.setVisible(false);

    let place = this.autocomplete.getPlace();

    map.setCenter(place.geometry.location);

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHoSSopykjcVtpJm-Xzn4KeViNp1rgjGQ&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <input id="autocomplete" style={{ width: '25%' }} placeholder=""/>

        <div id="map" style={{ height: 1000 }}></div>
      </div>
    );
  }
}

export default Map