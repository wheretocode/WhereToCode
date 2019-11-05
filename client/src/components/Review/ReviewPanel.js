// IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components'
import axios from "axios";
import { distanceTo } from "geolocation-utils"
import geocoder from 'geocoder';

// COMPONENTS
import NetworkModal from '../NetworkSpeed/networkModal';
import NetworkSpeed from '../NetworkSpeed/NetworkSpeed';

import TextArea from "../Review/TextArea";
import Select from "../Review/Select";
import Button from "../Review/Button";
import { withFirebase } from '../../Firebase';

/* global google */



// STYLES
const buttonStyle = {
  margin: "10px 10px 10px 10px",
};

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 12px;
`
const Header = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  
  color: #FBD702;
  width: 100%;
  margin-bottom: 15px;
`
const STYLED_form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 5px 0 5px 0;
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  border-radius: 10px 10px 10px 10px;
  background-color: white;

// import Firebase from './firebase';
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};`


class ReviewPanel1 extends Component {
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      newUser: {
        user_id: null,
        rating: " ",
        internet_rating: " ",
        comments: '',
        location_id: null
      },
      rating: ["1", "2", "3"],
      internet_rating: ["1", "2", "3"],
      uid: this.props.firebase.auth.currentUser.uid,
      submitted: false,
      network: false,
      distanceFromLocation: 100,
      newLocation: {
        locationName: this.props.details[0],
        locationGoogleId: this.props.locationId
      }
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.locationId !== prevProps.locationId) {
  //     console.log("inside CDU");
  //     return axios
  //       .get(`http://localhost:8080/users/${this.state.uid}`)
  //       .then(user => {
  //         console.log(user);
  //         let currentUserId = {
  //           user_id: user.data[0].id,
  //           rating: '',
  //           internet_rating: '',
  //           comments: '',
  //           location_id: null
  //         }
  //         this.setState({
  //           newUser: currentUserId
  //         })
  //         console.log("state.newuser after get uid", this.state.newUser);
  //       })
  //       .then(res => {
  //         let locationReq = this.props.locationId;
  //         return axios
  //           .get(`http://localhost:8080/locations/${locationReq}`)

  //       })
  //       .then(res => {
  //         console.log("get location by googleid", res);
  //         if (!res) {
  //           let newLocation = [{
  //             locationName: this.props.details[0],
  //             locationGoogleId: this.props.locationId
  //           }]
  //           console.log("newLocation", newLocation);
  //           let locationReq = this.props.locationId;
  //           return axios
  //             .post('http://localhost:8080/locations', newLocation)
  //         } else {
  //           console.log('location does not need to be posted');
  //         }
  //       })
  //       .then(res => {
  //         console.log("results from post", res);
  //         console.log("location id", this.props.locationId);
  //         let locationReq = this.props.locationId;
  //         return axios
  //           .get(`http://localhost:8080/locations/${locationReq}`)
  //       })
  //       .then(user => {
  //         console.log("res.data.id", user);
  //         let currentUser = {
  //           user_id: this.state.newUser.user_id,
  //           rating: '',
  //           internet_rating: '',
  //           comments: '',
  //           location_id: user.data[0].id
  //         }
  //         console.log("get location", user.data[0].id);
  //         console.log("CurrentUser", currentUser);
  //         this.setState({
  //           newUser: currentUser
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   }
  // }

  // COMPONENT
  componentDidMount() {
    console.log("inside CDM");
    console.log("location", this.props.locationId);
    console.log("this.state.uid", this.state.uid);
    console.log("state:", this.state.newUser);
    console.log("details", this.props.details[0]);


    return axios
    // .get(`https://wheretocode-master.herokuapp.com/users/${this.state.uid}`)
    .get(`http://localhost:8080/users/${this.state.uid}`)
    .then(user => {
      let currentUserId = {
        user_id: user.data[0].id,
        rating: null,
        internet_rating: null,
        comments: ''
      }
      this.setState({
        newUser: currentUserId
      })
    })
.then(res=> {
    let locationReq = this.props.locationId;
    return axios
      .get(`http://localhost:8080/locations/${locationReq}`)
    })
      .then(res => {
        console.log("get location by googleid", res);
        if (!res) {
          let newLocation = [{
            locationName: this.props.details[0],
            locationGoogleId: this.props.locationId
          }]
          console.log("newLocation", newLocation);
          let locationReq = this.props.locationId;
          return axios
            .post('http://localhost:8080/locations', newLocation)
        } else {
          console.log('location does not need to be posted');
        }
      })
      .then(res => {
        console.log("results from post", res);
        console.log("location id", this.props.locationId);
        let locationReq = this.props.locationId;
        return axios
          .get(`http://localhost:8080/locations/${locationReq}`)
      })
      .then(user => {
        console.log("res.data.id", user);
        let currentUser = {
          user_id: this.state.newUser.user_id,
          rating: '',
          internet_rating: '',
          comments: '',
          location_id: user.data[0].id
        }
        console.log("get location", user.data[0].id);
        console.log("CurrentUser", currentUser);
        this.setState({
          newUser: currentUser
        })
      })
      .catch(err => {
        console.log(err);
      })

    //Distance between user and review location, used for conditional render of button
    console.log("outside axios");
    // const geocoder = new google.maps.Geocoder();
    // let userCoords;

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     position => {
    //        userCoords = [position.coords.latitude, position.coords.longitude];
    //       });


    // } else {
    //   userCoords = [ -33.856, 151.215 ];
    // }


    // geocoder.__proto__.geocode({"address": this.props.address}, (res, err) => {
    //   const locationCoords = [res[0].geometry.location.lat(), res[0].geometry.location.lng()];
    //   console.log(err);
    //   this.setState(prevState => {
    //      return {...prevState, distanceFromLocation: distanceTo(userCoords, locationCoords)} 
    //     });
    // });


  }

  // METHODS
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;


    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
    );
  }

  handleTextArea(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          comments: value
        }
      }),
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log("userdata", userData);
    axios
      // .post("https://wheretocode-master.herokuapp.com/reviews", userData)
      .post("http://localhost:8080/reviews", userData)
      .then(response => {
        console.log("res", response)
      })
      .then(res => {
        this.setState({ submitted: true })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        user_id: '',
        rating: ' ',
        comments: '',
        internet_rating: ''
      }
    });
  }

  toggleNetworkTest = () => {
    this.setState(prevState => {
      return { ...prevState, network: !prevState.network }
    })
  }


  render() {


    // if(this.props.address) {
    //   //console.log(this.props.coords.lat(), this.props.coords.lng())
    //   const locationCoords = [ ...this.props.coords ];
    //   const userCoords = [ Number(localStorage.getItem('lat')), Number(localStorage.getItem('lng')) ];

    //   console.log(`****** ${headingDistanceTo(userCoords, locationCoords).distance} meters`);
    //   distanceFromLocation = Number(headingDistanceTo(userCoords, locationCoords).distance);
    // } 


    return (
      <>
        {(this.state.submitted ? <StyleModal><Header>Thank You For Submitting A Review</Header></StyleModal> :
          <StyleModal>
            <Header> Leave a Review </Header>

            <div style={{ display: "flex" }}>
              <STYLED_form form onSubmit={this.handleFormSubmit}>


                {/* Rating Required*/}
                <Select
                  title={"Location Rating"}
                  name={'rating'}
                  options={this.state.rating}
                  value={this.state.newUser.rating}
                  placeholder={"Select Rating"}
                  handleChange={this.handleInput}
                />
                {/*Internet Rating */}
                <Select
                  title={"Interet Rating"}
                  name={'internet_rating'}
                  options={this.state.internet_rating}
                  value={this.state.newUser.internet_rating}
                  placeholder={"Select Internet Rating"}
                  handleChange={this.handleInput}
                />
                {/*Comment */}
                <TextArea
                  title={"Comments"}
                  rows={10}
                  value={this.state.newUser.comments}
                  name={'comment'}
                  handleChange={this.handleTextArea}
                  placeholder={"Leave a comment"}
                />
                {/*Submit */}
                <div className='buttonContainer'>
                  <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                  />
                  {/* Clear form */}
                  <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                  />
                </div>
              </STYLED_form>

              {
                this.state.network ? <NetworkSpeed />
                  : null
              }
            </div>


            {/* {
              this.state.distanceFromLocation <= 2000 ? <NetworkModal handleNetwork={this.toggleNetworkTest}
                                                         runTest={this.state.network}
                                            />
                                         : null
            }

            {
              this.state.distanceFromLocation <= 500 ? <NetworkModal handleNetwork={this.toggleNetworkTest}
                                                         runTest={this.state.network}
                                            />
                                         : null
            } */}

            {
              this.state.distanceFromLocation <= 30.48 ? <NetworkModal handleNetwork={this.toggleNetworkTest}
                runTest={this.state.network}
              />
                : null
            }
            <p>{this.state.distanceFromLocation}</p>

          </StyleModal>

        )}
      </>
    );
  }
}

const ReviewPanel = withFirebase(ReviewPanel1);
export { ReviewPanel };

