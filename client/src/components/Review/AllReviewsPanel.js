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

    return axios
      .get(`https://wheretocode-master.herokuapp.com/users/${this.state.uid}`)
      .then(user => {
        let userid = user.data[0].id;
        this.setState({
          u_id: userid
        })
      })
      .then(res => {
        let locationReq = this.props.locationId;
        return axios.get(`https://wheretocode-master.herokuapp.com/locations/${locationReq}`)
      })
      .then(res => {
        let locationId = res.data[0].id;
        return axios.get(`https://wheretocode-master.herokuapp.com/reviews/${locationId}/location`)
      })
      .then(res => {
        if (res) {
          this.setState({
            reviews: [...this.state.reviews, res.data]
          })
          let map = this.state.reviews[0].map((review, i) => {
            return review.comments;
          })
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
                {this.state.reviews[0].map((review, i) =>
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