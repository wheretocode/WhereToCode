// IMPORTS
import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { withFirebase } from '../../Firebase';

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;

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

const Content = styled.div`
  display: flex;
  padding: 15px;
  margin: 5px 0 5px 0;
  border-radius: 10px 10px 10px 10px;
  background-color: white;`

class AllReviewsPanel1 extends React.Component {
  state = {
    reviews: [],
    uid: this.props.firebase.auth.currentUser.uid,
    u_id: null,
    loc_id: null
  }

  componentDidMount() {
    console.log("location & firebase", this.props.locationId, this.state.uid);


    axios
      // .get(`https://wheretocode-master.herokuapp.com/users/${this.state.uid}`)
      .get(`http://localhost:8080/users/${this.state.uid}`)
      .then(user => {
        console.log(user.data);
        let userid = user.data[0].id;

        this.setState({
          u_id: userid
        })
      })
      .then(res => {
        let locationReq = this.props.locationId;
        return axios.get(`http://localhost:8080/locations/${locationReq}`)
      })
      .then(res => {
        console.log("get location id res", res.data[0].id);

        let locationId = res.data[0].id;
        return axios.get(`http://localhost:8080/reviews/${locationId}/location/${this.state.u_id}`)
      })
      .then(res => {
        if (res) {
          console.log('res after get review by user & location', res);
          this.setState({
            reviews: [...this.state.reviews, res.data]
          })

          console.log("state review", this.state.reviews)
          let map = Object.entries(this.state.reviews[0]).map((review, i) => {
            return review[i].userName;
          })
          console.log("map", map);
        } else {
          console.log("no response for get by userLocation", res);
        }
      })
      .catch(error => {
        console.log(error);
      })



  }

  render() {
    return (

      <>
        <StyleModal>
          <h1>reviews</h1>
        </StyleModal>
        {(this.state.reviews.length === 0 ? <StyleModal><Header>No Reviews Exist Yet</Header></StyleModal>
          : <StyleModal>
            <Header> Reviews </Header>
            <Content>
              <ul className='ratingInfo'>
                {Object.entries(this.state.reviews[0]).map((review, i) =>
                  <li key={review.ratingId}>
                    Username:{review.userName} -- Rating: {review.rating} -- Comments:{review.comments}
                  </li>
                )}
              </ul>
            </Content></StyleModal>)}
      </>

    )
  }
}
const AllReviewsPanel = withFirebase(AllReviewsPanel1);
export { AllReviewsPanel }