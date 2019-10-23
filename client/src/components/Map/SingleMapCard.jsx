import React, { Component } from "react";
import Popup from "reactjs-popup";
import Review from "../Review/Review";
import styled from "styled-components";
import StarRatings from "react-star-ratings";


/*global google*/

class SingleMapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      hours: [],
      id: null
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
          hours: !place.opening_hours
            ? ["N/A"]
            : place.opening_hours.weekday_text,
          id: id
        });
      }
    });

  };

  render() {
    return (
      <>

        {this.props.location !== "" ? (
          <SingleMapCardContainer>
            <img src={this.props.icon} />
            <DetailContainer>
              <h2>{`${this.props.location}`}</h2>
              {/* Placeholder rating */}
              <h4>
                {`rating: ${this.props.rating} `}
                <StarRatings
                  rating={this.props.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  starSpacing="0px"
                />
              </h4>
              <p>{`${this.props.address}`}</p>
              <Popup modal trigger={<DetailButton>Details</DetailButton>}>
                {close => (
                  <Review
                    close={close}
                    onClick={this.requestDetails(this.props.id)}
                    details={this.state.details}
                    hours={this.state.hours}
                  />
                )}
              </Popup>
            </DetailContainer>
          </SingleMapCardContainer>
        ) : null}
      </>
    );
  }
}

export default SingleMapCard;

const SingleMapCardContainer = styled.div`
  display: flex;
  border-radius: 15px;
  box-shadow: -4px 2px 22px -13px rgba(0, 0, 0, 0.75);
  width: 700px;
  height: 365px;
  margin: 0;
  padding: 14px;
  align-items: center;
  img {
    margin-right: 10px;
    height: 300px;
    width: 225px;
    overflow: hidden;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  h2 {
    font-size: 24px;
    border-bottom: 1px dotted lightgray;
    line-height: 2;
  }
  h4 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const DetailButton = styled.button`
  align-self: center;
  border-radius: 10px;
  border: 2px solid gold;
  font-size: 18px;
  cursor: pointer;
  width: 165px;
  padding: 10px 56px;
  margin: 35px 0 0;
  background: white;
  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(176, 170, 176, 1);
    transform: translateY(-2px);
    transition: 0.2s;
  }
`;
