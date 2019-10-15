import React, { Component } from "react";
import Popup from "reactjs-popup";
import Review from "../Review/Review";

/*global google*/

class SingleMapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      hours: []
    };
  }

  requestDetails = id => {
    let map = new google.maps.Map(document.getElementById("fakeMap"));

    let service = new google.maps.places.PlacesService(map);

    let request = {
      placeId: id,
      fields: ["name", "formatted_phone_number", "opening_hours"]
    };
    // Took hours out of details because I was having issues mapping over an array inside of an array ¯\_(ツ)_/¯
    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          details: [place.name, place.formatted_phone_number],
          hours: place.opening_hours.weekday_text
        });
      }
    });
  };

  render() {
    return (
      <>
        {this.props.location !== "" ? (
          <div
            style={{
              border: "1px solid black",
              margin: 10,
              padding: 10,
              width: "500px"
            }}
          >
            <img src={this.props.icon} />
            <p>{`name: ${this.props.location}`}</p>
            {/* Placeholder rating */}
            <p>{`rating: ${this.props.rating}`}</p>
            <p>{`address: ${this.props.address}`}</p>
            <Popup modal trigger={<button>Details</button>}>
              {close => (
                <Review
                  close={close}
                  onClick={this.requestDetails(this.props.id)}
                  details={this.state.details}
                  hours={this.state.hours}
                />
              )}
            </Popup>
          </div>
        ) : null}
      </>
    );
  }
}

export default SingleMapCard;
