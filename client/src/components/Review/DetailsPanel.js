// IMPORTS
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { withFirebase } from "../../Firebase";
import axiosWithAuth from "../../Helpers/axiosWithAuth";

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  font-size: 12px;
`;
const Header = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  color: #fbd702;

  width: 100%;
  margin-bottom: 15px;
`;
const StyledFeaturedReview = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  margin-top: 5px;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;

  h2,
  p {
    margin: 0 0 5px 0;
  }
  .hours {
    margin-bottom: 0px;
  }

  border-radius: 10px 10px 10px 10px;
  background-color: white;
`;
const StyledFeatureReview = styled.div`
  display: flex;
  flex-direction: column;
`;

// COMPONENT
class DetailsPanel1 extends React.Component {
  // STATE
  state = {
    review: [],
    location_id: [],
    uid: this.props.firebase.auth.currentUser.uid,
    location: this.props.locationId
  };

  componentDidUpdate(prevProps, nextState) {
    if (this.props.locationId !== prevProps.locationId) {
      return (
        axiosWithAuth()
          .get(
            `https://wheretocode-master.herokuapp.com/users/${this.state.uid}`
          )
          // .get(`localhost:8080/users/${this.state.uid}`)
          .then(user => {
            console.log("user on line 77", user);
            let { id } = user.data[0];
            this.setState({
              uid: id
            });
          })
          .then(res => {
            console.log("res on line 84", res);
            let locationReq = this.props.locationId;
            return axios.get(
              `https://wheretocode-master.herokuapp.com/locations/${locationReq}`
            );
          })
          .then(res => {
            console.log("res on line 91", res);
            if (res.data.length === 0) {
              let newLocation = [
                {
                  locationName: this.props.details[0],
                  locationGoogleId: this.props.locationId
                }
              ];
              return axios.post(
                "https://wheretocode-master.herokuapp.com/locations",
                newLocation
              );
            } else {
              console.log("location does not need to be posted");
            }
          })
          .then(res => {
            console.log("res on line 108", res);
            let locationReq = this.props.locationId;
            return axios.get(
              `https://wheretocode-master.herokuapp.com/locations/${locationReq}`
            );
          })
          .then(res => {
            console.log("res on line 115", res);
            let locationId = res.data[0].id;
            return axios.get(
              `https://wheretocode-master.herokuapp.com/reviews/${locationId}/location`
            );
          })
          .then(res => {
            console.log("res on line 122", res);
            let newReview1 = res.data.slice(-1);
            let newReview = newReview1[0];
            this.setState({
              review: newReview
            });
          })
          .catch(error => {
            console.log(error);
          })
      );
    }
  }

  // METHODS
  componentDidMount() {
    let locationReq = this.props.locationId;
    console.log(locationReq);
    return axios
      .get(`https://wheretocode-master.herokuapp.com/locations/${locationReq}`)
      .then(res => {
        console.log(res);
        let locationId = res.data[0].id;
        return axios.get(
          `https://wheretocode-master.herokuapp.com/reviews/${locationId}/location`
        );
      })
      .then(res => {
        let newReview1 = res.data.slice(-1);
        let newReview = newReview1[0];
        this.setState({
          review: newReview
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // RENDER
  render() {
    return (
      <StyleModal>
        <Header> Details </Header>
        {/* // -- // */}
        <Content>
          {" "}
          <h2>Name:</h2>
          <p>{this.props.details[0]}</p>
          <h2>Phone:</h2>
          <p>{this.props.details[1]}</p>
          <h2 className="hours">Hours:</h2>
          <ul>
            {this.props.hours.map((data, index) => {
              return (
                <li key={index}>
                  <div>{data}</div>
                </li>
              );
            })}
          </ul>
          <StyledFeatureReview>
            <StyledFeaturedReview>Latest Review</StyledFeaturedReview>
            {Object.keys(this.state.review).length > 0 ? (
              <div>
                <ul>
                  <li>
                    <p>User: {this.state.review.userName},</p>
                  </li>
                  <li>
                    <p>Rating: {this.state.review.rating},</p>
                  </li>
                  <li>
                    <p>Comments: {this.state.review.comments}</p>
                  </li>
                </ul>
              </div>
            ) : (
              <p>There Are No Reviews Currently</p>
            )}
          </StyledFeatureReview>
          {/* })} */}
        </Content>
        {/* // -- // */}
      </StyleModal>
    );
  }
}
// EXPORT
const DetailsPanel = withFirebase(DetailsPanel1);
export default DetailsPanel;
