import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyleModal = styled.div`
  font-size: 12px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;
const Content = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

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
          <p>{props.details[0]}</p>
          <h2>Phone:</h2>
          <p>{props.details[1]}</p>
          <h2>Hours:</h2>
          {props.hours.map(day => {
            return <p>- {day} -</p>;
          })}
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
        </Content>
      </StyleModal>
    );
  }
}

export default DetailsPanel;
