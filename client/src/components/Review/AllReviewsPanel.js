// IMPORTS
import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import axios from 'axios';

// STYLED COMPONENTS
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const StyleModal = styled.div`
  font-size: 12px;
`

const Header = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  
  color: #FBD702;

  width: 100%;
  padding: 5px;

  border-bottom: 1px solid gray;
`
const Content = styled.div`

  width: 100%;
  padding: 10px 5px;
`
const Actions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`


class AllReviewsPanel extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    axios.get(`https://wheretocode-master.herokuapp.com/reviews/`)
      .then(res => {
        const reviews = res.data;
        this.setState({ reviews });
      })
  }

  render() {
    return (
      <StyleModal>
        <Header> Reviews </Header>
        <Content>      
          <ul>
            { this.state.reviews.map(review =>
              <li>UserId: {review.user_id},  Rating: {review.rating}, Comments:{review.comments}</li>)
            }
          </ul>
        </Content>    
  <Actions>
  <Popup
    trigger={<Button> Trigger </Button>}
    position="top center"
    closeOnDocumentClick
  >
    <span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
      magni omnis delectus nemo, maxime molestiae dolorem numquam
      mollitia, voluptate ea, accusamus excepturi deleniti ratione
      sapiente! Laudantium, aperiam doloribus. Odit, aut.
    </span>
  </Popup>
  <Popup
    trigger={<Button> Trigger </Button>}
    position="top center"
    closeOnDocumentClick
  >
    <span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
      magni omnis delectus nemo, maxime molestiae dolorem numquam
      mollitia, voluptate ea, accusamus excepturi deleniti ratione
      sapiente! Laudantium, aperiam doloribus. Odit, aut.
    </span>
  </Popup>
</Actions>
</StyleModal>
    )
  }
}
export default AllReviewsPanel;
