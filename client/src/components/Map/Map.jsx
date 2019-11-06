// Imports
/*global google*/
import React, { Component } from "react";

// Import React Script Library to load Google object
import MapCards from "./MapCards";

import styled from "styled-components";
import FilteredMapCards from "./FilteredMapCards";

class Map extends Component {
  constructor(props) {
    super(props);
    this.searchButton = React.createRef();

    this.state = {
      initialPlace: this.props.place,
      locations: [],
      locationsFilter: [],
      filterBool: false,
      pos: {
        lat: 0,
        lng: 0
      },
      details: [],
      query: ""
    };
  }

  componentDidMount() {
    // Try HTML5 Geolocation
    if (this.state.initialPlace) {
      this.initialMapRender();
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            localStorage.setItem("lat", position.coords.latitude);
            localStorage.setItem("lng", position.coords.longitude);
            this.setState({
              pos: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            });
            // Loads map
            let map = new google.maps.Map(document.getElementById("map"), {
              center: this.state.pos,
              zoom: 15
            });
          },
          () => {
            // If user denies geolocation info, default location is used
            this.handleLocationError();
          }
        );
      } // To disable any eslint 'google not defined' errors
    }

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

    this.searchButton.current.addEventListener("click", this.handleMapChange);
  }

  handleLocationError = (browserHasGeolocation = false) => {
    // Set default location to Sydney, Australia
    let pos = { lat: -33.856, lng: 151.215 };

    let map = new google.maps.Map(document.getElementById("map"), {
      center: pos,
      zoom: 15
    });
  };

  initialMapRender = () => {
    // Get map object
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15
    });

    // Gets new place when auto complete search is clicked
    let place = this.state.initialPlace;

    // request object sets search query, search radius, and coordinates
    let request = {
      location: place.geometry.location,
      id: place.place_id,
      rating: place.rating,
      icon: place.icon,
      photos: place.photos,
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
      this.setState({ locations: [], locationsFilter: [] });
    }

    // cb function that returns place results
    let callback = (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.map(place => {
          // Adds map markers to nearby locations
          let marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
          });

          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          this.setState({
            locations: [
              ...this.state.locations,
              {
                name: place.name,
                icon: !place.photos // Loads an img if it has one, if not it uses default google icon
                  ? place.icon
                  : place.photos[0].getUrl({
                      maxWidth: 100
                    }),
                id: place.place_id,
                address: place.formatted_address,
                rating: place.rating
              }
            ]
          });
        });
      }
    };
    // PlaceService has the `textSearch` method
    service.textSearch(request, callback);
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value });
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
      rating: place.rating,
      icon: place.icon,
      photos: place.photos,
      radius: "500",
      query: this.state.query || "cafe"
    };

    // requests use of PlaceService
    let service = new google.maps.places.PlacesService(map);

    // Sets map screen to new location based on lat and lng
    map.setCenter(place.geometry.location);
    // Sets marker to lat/lng position

    // Resets state when a new location is clicked
    if (this.state.locations.name !== "") {
      this.setState({ locations: [], locationsFilter: [] });
    }

    // cb function that returns place results
    let callback = (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        let bounds = new google.maps.LatLngBounds();

        results.map(place => {
          // Adds map markers to nearby locations
          let marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
          });

          bounds.extend(marker.getPosition());

          marker.setPosition(place.geometry.location);
          marker.setVisible(true);
          map.fitBounds(bounds);
          map.setCenter(bounds.getCenter());

          this.setState({
            locations: [
              ...this.state.locations,
              {
                name: place.name,
                icon: !place.photos // Loads an img if it has one, if not it uses default google icon
                  ? place.icon
                  : place.photos[0].getUrl({
                      maxWidth: 300
                    }),
                id: place.place_id,
                address: place.formatted_address,
                rating: place.rating
              }
            ]
          });
        });
      }
    };
    // PlaceService has the `textSearch` method
    service.textSearch(request, callback);
  };

  handleFocus = event => event.target.select();

  filterResults = () => {
    if (this.state.filterBool === true) {
      this.setState({ filterBool: false });
    } else {
      this.setState({ filterBool: true });
    }

    if (this.state.locationsFilter.length > 0) {
      return;
    } else {
      this.state.locations.map(place => {
        if (place.rating > 4) {
          this.setState(prevState => ({
            locationsFilter: [...prevState.locationsFilter, place]
          }));
        }
      });
    }
  };

  render() {
    return (
      <HomeContainer>
        <div
          style={{
            width: this.state.locations.length !== 0 ? "49vw" : "0",
            padding: "8% 0 0 0"
          }}
        >
          {this.state.locations.length > 0 ? (
            <Button onClick={this.filterResults}>Highest Rated</Button>
          ) : null}

          {!this.state.filterBool ? (
            <MapCards locations={this.state.locations} />
          ) : (
            <FilteredMapCards locationsFilter={this.state.locationsFilter} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5% 0 0 0",
            width: this.state.locations.length !== 0 ? "49vw" : "100%",
            alignItems: "center"
          }}
        >
          <input
            id="locationType"
            style={{ width: "25%" }}
            placeholder="What are you looking for..."
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "50%",
              marginBottom: "20px",
              background: "transparent",
              fontSize: "20px"
            }}
            onChange={this.handleInputChange}
            value={this.state.query}
          />
          <input
            id="autocomplete"
            style={{ width: "99.6%", height: "30px" }}
            placeholder="Enter location..."
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "50%",
              marginBottom: "20px",
              background: "transparent",
              fontSize: "20px"
            }}
            onFocus={this.handleFocus}
          />
          <Button ref={this.searchButton}>Search</Button>

          <div
            id="map"
            style={{
              height: "82.85vh",
              width: "100%"
            }}
          ></div>

          {/* I used an empty div for the map object in the requestDetails function, this is a strange work around. If I use the actual map it reloads and we lose the position and markers. */}
          <div id="fakeMap"></div>
        </div>
      </HomeContainer>
    );
  }
}

export default Map;

const HomeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1400px;
  height: 94.2vh;
`;

const Button = styled.button`
  align-self: center;
  border-radius: 10px;
  border: 2px solid gold;
  font-size: 18px;
  cursor: pointer;
  width: 200px;
  padding: 10px 56px;
  margin: 35px 0 10px;
  background: white;
  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(176, 170, 176, 1);
    transform: translateY(-2px);
    transition: 0.2s;
  }
`;
