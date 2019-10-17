// IMPORTS
import React from "react";
import axios from "axios";
import styled from "styled-components";

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  font-size: 12px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  width: 100%;
  margin-bottom: 10px;

  color: #FBD702;

`;
const STYLED_hours = styled.div`

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
  

  h2 {
    margin: 0, 0, 5px, 0;
  }
  p {
    margin: 0px;
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

// COMPONENT TO EXPORT
class DetailsPanel extends React.Component {
  state = {
    location_id: []
  };

  componentDidMount() {
    axios
      .get(`https://wheretocode-master.herokuapp.com/reviews/1`)
      .then(res => {
        const location_id = res.data;
        this.setState({ location_id });
      });
  }

  render() {
    return (
      <StyleModal>
        <Header> Details </Header>
        <Content>
          {" "}
          <h2>Name:</h2>
            <p>{this.props.details[0]}</p>
          <h2>Phone:</h2>
            <p>{this.props.details[1]}</p>
          <h2 className='hours'>Hours:</h2>
          <ul>
            {this.props.hours.map(day => {
              return <li><STYLED_hours>{day}</STYLED_hours></li>;
            })}
          </ul>
          <STYLED_featureReview>
            <STYLED_featuredReview>
              Latest Review
            </STYLED_featuredReview>
            {this.state.location_id.map(location => {
              return (
                <ul key={location.id}>
                  <li>
                    {" "}
                    <p>UserId: {location.user_id},</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <p>Rating: {location.rating},</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <p>Comments: {location.comment}</p>{" "}
                  </li>
                </ul>
              );
            })}
          </STYLED_featureReview>
        </Content>
      </StyleModal>
    );
  }
}


// EXPORT
export default DetailsPanel;
