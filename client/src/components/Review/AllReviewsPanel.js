// IMPORTS
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withFirebase } from "../../Firebase";

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 550px;
  width: auto;
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

const Content = styled.div`
display: flex;
  width: auto;
  padding: 15px;
  margin: 5px 0 5px 0;
  border-radius: 10px 10px 10px 10px;
  background-color: white;
  overflow-x: hidden; 
  overflow-x: auto; 
  };
  ol {
    counter-reset: li; /* Initiate a counter */
    list-style: none; /* Remove default numbering */
    font: 15px;
    padding: 0;
    margin-bottom: 4em;
    height: 100%;
    width: 100%;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
     a{
      position: relative;
      display: block;
      padding: .4em .4em .4em .8em;
      margin: .5em 0 .5em 2.5em;
      background: #ddd;
      color: #444;
      text-decoration: none;
      transition: all .3s ease-out;   
      };
      a:hover{
          background: #eee;
      };   
      a:before{
          content: counter(li);
          counter-increment: li;
          position: absolute; 
          left: -2.5em;
          top: 50%;
          margin-top: -1em;
          background: #FBD702;
          height: 2em;
          width: 2em;
          line-height: 2em;
          text-align: center;
          font-weight: bold;
      };
      a:after{
          position: absolute; 
          content: '';
          border: .5em solid transparent;
          left: -1em;
          top: 50%;
          margin-top: -.5em;
          transition: all .3s ease-out;               
      };
      a:hover:after{
          left: -.5em;
          border-left-color: #FBD702;             
      };
};
  `;

class AllReviewsPanel1 extends React.Component {
  state = {
    reviews: [],
    uid: this.props.firebase.auth.currentUser.uid,
    u_id: null,
    loc_id: null
  };

  componentDidMount() {
    return axios
      .get(`https://wheretocode-master.herokuapp.com/users/${this.state.uid}`)
      .then(user => {
        let userid = user.data[0].id;
        this.setState({
          u_id: userid
        });
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
        if (res) {
          this.setState({
            reviews: [...this.state.reviews, res.data]
          });
          let map = this.state.reviews[0].map((review, i) => {
            return review.comments;
          });
        } else {
          console.log("no response for get by userLocation", res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <StyleModal></StyleModal>
        {this.state.reviews.length === 0 ? (
          <StyleModal>
            <Header>No Reviews Exist Yet</Header>
          </StyleModal>
        ) : (
          <StyleModal>
            <Header> Reviews </Header>
            <Content>
              <ol className="ratingInfo">
                {this.state.reviews[0].map((review, i) => (
                  <li key={review.ratingId}>
                    <a href="#">
                      Username:{review.userName} -- Rating: {review.rating} --
                      Comments:{review.comments}{" "}
                    </a>
                  </li>
                ))}
              </ol>
            </Content>
          </StyleModal>
        )}
      </>
    );
  }
}
const AllReviewsPanel = withFirebase(AllReviewsPanel1);
export { AllReviewsPanel };
