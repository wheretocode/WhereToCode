// IMPORTS
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { withFirebase } from "../../Firebase";
import axiosWithAuth from "../../Helpers/axiosWithAuth";
import StarRatings from "react-star-ratings";

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 550px;
  padding: 10px 10px 10px 10px;
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
const StyledFeaturedReview1 = styled.div`
  text-align: center;
  font-size: 14px;
  font-style: italic;
  margin-top: 5px;
  padding-top: 5px;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  border-radius: 10px 10px 10px 10px;
  background-color: white;
  overflow-x: hidden;
  overflow-x: auto;
`;
const ContentRight = styled.div`
  padding: 15px;
  width: 70%;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  h2,
  p {
    margin: 0 0 5px 30px;
    color: white;
  }
  .hours {
    margin-bottom: 0px;
  }
  .name {
    padding-top: px;
  }
  background-color: #111;
  opacity: 0.45;
`;
const ContentLeft = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50%;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  h2,
  p {
    margin: 0 0 5px 0;
    img {
      display: flex;
      margin-right: 10px;
      height: 80%px;
      width: 100%;
      overflow: hidden;
      border-radius: 20px;
    }
  }
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
      return axiosWithAuth()
        .get(`https://wheretocode-master.herokuapp.com/users/${this.state.uid}`)
        .then(user => {
          let { id } = user.data[0];
          this.setState({
            uid: id
          });
          let locationReq = this.props.locationId;
          return axios.get(
            `https://wheretocode-master.herokuapp.com/locations/${locationReq}`
          );
        })
        .then(res => {
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
          let locationReq = this.props.locationId;
          return axios.get(
            `https://wheretocode-master.herokuapp.com/locations/${locationReq}`
          );
        })
        .then(res => {
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
  }

  // METHODS
  componentDidMount() {
    let locationReq = this.props.locationId;
    return axios
      .get(`https://wheretocode-master.herokuapp.com/locations/${locationReq}`)
      .then(res => {
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

  render() {
    return (
      <StyleModal>
        <Header> Details </Header>
        <Content>
          <ContentLeft>
            <p>
              <img style={{ marginLeft: 0 }} src={this.props.icon} />
            </p>
            <StyledFeatureReview>
              <StyledFeaturedReview>Latest Review</StyledFeaturedReview>
              {this.state.review ? (
                <div>
                  <ul>
                    <li>
                      <p>User: {this.state.review.userName},</p>
                    </li>
                    <li>
                      <p>
                        Overall Rating:
                        <StarRatings
                          rating={this.state.review.rating}
                          starRatedColor="gold"
                          numberOfStars={3}
                          name="rating"
                          starDimension="15px"
                          starSpacing="0px"
                        />
                      </p>
                    </li>
                    <li>
                      <p>
                        Internet Rating:
                        <StarRatings
                          rating={this.state.review.internet_rating}
                          starRatedColor="gold"
                          numberOfStars={3}
                          name="rating"
                          starDimension="15px"
                          starSpacing="0px"
                        />
                      </p>
                    </li>
                    <li>
                      <p>Comments: {this.state.review.comments}</p>
                    </li>
                  </ul>
                </div>
              ) : (
                  <StyledFeaturedReview1>
                    <p>There Are No Reviews Currently</p>
                  </StyledFeaturedReview1>
                )}
            </StyledFeatureReview>
          </ContentLeft>
          <ContentRight>
            <h2 className="name">Name:</h2>
            <p style={{ fontSize: "20px" }}>{this.props.details[0]}</p>
            <h2>Phone:</h2>
            <p style={{ fontSize: "20px" }}>{this.props.details[1]}</p>
            <h2 className="hours">Hours:</h2>
            <ul>
              <p>
                {this.props.hours.map((data, index) => {
                  return (
                    <li key={index}>
                      <div>{data}</div>
                    </li>
                  );
                })}
              </p>
            </ul>
          </ContentRight>
        </Content>
        {/* // -- // */}
      </StyleModal>
    );
  }
}
// EXPORT
const DetailsPanel = withFirebase(DetailsPanel1);
export default DetailsPanel;


