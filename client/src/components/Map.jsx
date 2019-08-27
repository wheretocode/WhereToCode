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

    // Sets autocomplete fields to be returned
    this.autocomplete.setFields(['address_components', 'formatted_address', 'geometry', 'icon', 'name']);
    
    // When a new place is selected the map will be forced to update
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
    // Get map object
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 13
    });

    // Sets marker
    let marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    // Marker is invisible on initial load
    marker.setVisible(false);

    // Gets new place when auto complete search is clicked
    let place = this.autocomplete.getPlace();

    // Sets map screen to new location based on lat and lng
    map.setCenter(place.geometry.location);
   
    // Sets marker to lat/lng position
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