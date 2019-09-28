// Imports
import React, { Component } from "react";

// Import React Script Library to load Google object
import Script from "react-load-script";
import MapCards from "./MapCards";

/*global google*/

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      pos: {
        lat: 0,
        lng: 0
      },
      details: []
    };
  }

  handleScriptLoad = () => {
    // Try HTML5 Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            pos: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
          // Loads map
          let map = new google.maps.Map(document.getElementById("map"), {
            center: this.state.pos,
            zoom: 13
          });
        },
        () => {
          // If user denies geolocation info, default location is used
          this.handleLocationError();
        }
      );
    } // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );

    // Sets autocomplete fields to be returned
    this.autocomplete.setFields([
      "address_components",
      "formatted_address",
      "geometry",
      "icon",
      "name",
      "place_id"
    ]);

    // When a new place is selected the map will be forced to update
    this.autocomplete.addListener("place_changed", this.handleMapChange);
  };

  handleLocationError = (browserHasGeolocation = false) => {
    // Set default location to Sydney, Australia
    let pos = { lat: -33.856, lng: 151.215 };

    let map = new google.maps.Map(document.getElementById("map"), {
      center: pos,
      zoom: 15
    });
  };

  requestDetails = id => {
    let map = new google.maps.Map(document.getElementById("map"));

    let service = new google.maps.places.PlacesService(map);

    let request = {
      placeId: id,
      fields: ["name", "formatted_phone_number"]
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(`${place.name} and ${place.formatted_phone_number}`);
      }
    });
  };

  handleMapChange = () => {
    // Get map object
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15
    });

    // Gets new place when auto complete search is clicked
    let place = this.autocomplete.getPlace();

    // request object sets search query, search radius, and coordinates
    let request = {
      location: place.geometry.location,
      id: place.place_id,
      radius: "500",
      query: "Cafe"
    };

    // requests use of PlaceService
    let service = new google.maps.places.PlacesService(map);

    // Sets map screen to new location based on lat and lng
    map.setCenter(place.geometry.location);
    // Sets marker to lat/lng position

    // Resets state when a new location is clicked
    if (this.state.locations.name !== "") {
      this.setState({ locations: [] });
    }

    // cb function that returns place results
    let callback = (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.map(item => {
          // Adds map markers to nearby locations
          let marker = new google.maps.Marker({
            map: map,
            position: item.geometry.location,
            title: item.name
          });

          marker.setPosition(item.geometry.location);
          marker.setVisible(true);

          this.setState({
            locations: [
              ...this.state.locations,
              {
                name: item.name,
                id: item.place_id
              }
            ]
          });
        });
      }
    };
    // PlaceService has the `textSearch` method
    service.textSearch(request, callback);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHoSSopykjcVtpJm-Xzn4KeViNp1rgjGQ&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <input
          id="autocomplete"
          style={{ width: "25%" }}
          placeholder="Enter location..."
        />

        <div id="map" style={{ height: 500, width: 500, margin: 10 }}></div>

        <MapCards
          locations={this.state.locations}
          handleScriptLoad={this.handleScriptLoad}
          requestDetails={this.requestDetails}
        />
      </div>
    );
  }
}

export default Map;
