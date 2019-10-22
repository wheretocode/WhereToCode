// Imports
import React, { useState } from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// Import React Script Library to load Google object
import MapCards from "./MapCards";

const MapComponent = ({ coordinates, placeId, google }) => {
  const [locations, setLocations] = useState([]);

  const mapStyles = {
    width: "50%",
    height: "100%"
  };

  const fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;
    let service = new google.maps.places.PlacesService(map);

    let request = {
      location: coordinates,
      id: placeId,
      // rating: result.rating,
      // icon: result.icon,
      // photos: result.photos,
      radius: "500",
      query: "Cafe"
    };
    let callback = (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        let nearbyCafes = results.map(place => {
          let nearbyCafeObj = {
            name: place.name,
            icon: !place.photos // Loads an img if it has one, if not it uses default google icon
              ? place.icon
              : place.photos[0].getUrl({
                  maxWidth: 100
                }),
            id: place.place_id,
            address: place.formatted_address,
            rating: place.rating,
            pos: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }
          };
          return nearbyCafeObj;
        });
        setLocations(nearbyCafes);
        console.log(nearbyCafes);
      }
    };
    // PlaceService has the `textSearch` method
    service.textSearch(request, callback);
  };

  return (
    <Container>
      <Map
        google={google}
        onReady={fetchPlaces}
        zoom={13}
        style={mapStyles}
        initialCenter={coordinates}
      >
        {locations.map(loc => {
          return <Marker position={loc.pos} />;
        })}
      </Map>
      <MapCards locations={locations} />
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDHoSSopykjcVtpJm-Xzn4KeViNp1rgjGQ"
})(MapComponent);

const Container = styled.div`
  display: flex;
`;
