// IMPORTS
import React from "react";
import styled from "styled-components";
import axios from 'axios';

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
  background-color: white;
`
// COMPONENT
class AllReviewsPanel extends React.Component {
  // STATE
  state = {
    reviews: []
  }

  // METHODS
  componentDidMount() {
    axios.get(`https://wheretocode-master.herokuapp.com/reviews/`)
      .then(res => {
        const reviews = res.data;
        this.setState({ reviews });
      })
  }

  // RENDER
  render() {
    return (
      <StyleModal>
        <Header> Reviews </Header>
        <Content>      
          <ul className='ratingInfo'>
            { this.state.reviews.map((review, index) =>
              <li key={index}>
                  Rating: {review.rating} -- Comments:{review.comments}
              </li>)
            }
          </ul>
        </Content>    
      </StyleModal>
    )
  }
}

// EXPORT
export default AllReviewsPanel;
