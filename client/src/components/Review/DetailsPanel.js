// IMPORTS
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { withFirebase } from "../../Firebase";

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 10px 0 10px;

  font-size: 12px;
`;
const Header = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  color: #FBD702;

  width: 100%;
  margin-bottom: 15px;
`;
const STYLED_featuredReview = styled.div`
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

  h2, p {
    margin: 0 0 5px 0;
  }
  .hours {
    margin-bottom: 0px;
  }

  border-radius: 10px 10px 10px 10px;
  background-color: white;
`;
const STYLED_featureReview = styled.div`
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// COMPONENT
class DetailsPanel1 extends React.Component {
  // STATE
  state = {
    review: [],
    location_id: [],
    uid: this.props.firebase.auth.currentUser.uid,
  };

  // METHODS
  componentDidMount() {
    console.log("location", this.props.locationId)


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
        return axios.get(`http://localhost:8080/reviews/${locationId}/location`)
      })
      .then(res => {
        console.log('res after get review by user & location', res);
        let newReview = (res.data).slice(-1);
        console.log("newreview", newReview);
        this.setState({
          review: [res.data]
        })
        console.log("newreview", newReview);
        console.log("state review", this.state.review)
        console.log("this.state review[0]", this.state.review[0]);
        let thing = this.state.review[0];
        console.log('thing', thing);
        let map = thing.slice(-1);
        console.log("map", map);
      })
      .catch(error => {
        console.log(error);
      })


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
          <h2 className='hours'>Hours:</h2>
          <ul>
            {this.props.hours.map((data, index) => {
              return <li key={index}><div>{data}</div></li>;
            })}
          </ul>
          <STYLED_featureReview>
            <STYLED_featuredReview>
              Latest Review
            </STYLED_featuredReview>
            {/* {(this.state.review.length > 0 ? <div>
              {(this.state.review[0].map((review, index) =>
                <ul>

                  <li >


                    <p>User: {review[this.state.review.length - 1].userName},</p>

                  </li>
                  <li>

                    <p>Rating: {review[this.state.review.length - 1].rating},</p>
                  </li>
                  <li>

                    <p>Comments: {review[this.state.review.length - 1].comments}</p>
                  </li>
                </ul>
              ))}</div> : <p>There Are No Reviews Currently</p>
            )} */}
          </STYLED_featureReview>
          {/* })} */}
        </Content>
        {/* // -- // */}
        <Actions>
          <Popup
            trigger={<Button> View Internet Speed </Button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              MAKE THIS ITS OWN COMPONENT AND BUILD OUT SPECIFIC AGGREGATION or DEFAULT w/ NO INFO
            </span>
          </Popup>
        </Actions>
      </StyleModal>
    );
  }
}

// EXPORT
const DetailsPanel = withFirebase(DetailsPanel1);
export default DetailsPanel;
