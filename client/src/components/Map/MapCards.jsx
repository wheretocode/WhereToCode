import React, { Component } from "react";
import Script from "react-load-script";

import SingleMapCard from "./SingleMapCard";

/*global google*/

class MapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationDetails: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // this.props.locations.map(location => {
    //   this.setState({
    //     locationDetails: [
    //       ...this.state.locationDetails,
    //       {
    //         id: location
    //       }
    //     ]
    //   });
    // });
    if (this.state.locationDetails.length === 0) {
      this.props.locations.map(location => {
        this.setState({
          locationDetails: [
            ...this.state.locationDetails,
            {
              id: location
            }
          ]
        });
      });
    } else if (this.state.locationDetails.length === 20) {
      return;
    }
  }

  placeRequest = id => {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13
    });

    let request = {
      placeId: id,
      fields: ["formatted_phone_number"]
    };

    let service = new google.maps.places.PlacesService(map);

    let callback = (results, status) => {
      if (status == google.maps.places.PlaceServiceStatus.OK) {
        results.map(item => {
          this.setState({
            locationDetails: [
              ...this.state.locationDetails,
              {
                phone: item.formatted_phone_number
              }
            ]
          });
        });
      }
    };

    service.getDetails(request, callback);
  };

  render() {
    return (
      <div>
        {/* {this.props.locations.map(location => {
          return (
            <div>
              <SingleMapCard location={location.name} />
            </div>
          );
        })} */}
        {console.log(this.state.locationDetails)}
      </div>
    );
  }
}

export default MapCards;
