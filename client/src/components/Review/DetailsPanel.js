// IMPORTS
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Popup from "reactjs-popup";

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
class DetailsPanel extends React.Component {
  // STATE
  state = {
    location_id: []
  };

  // METHODS
  componentDidMount() {

    axios
      .get(`https://wheretocode-master.herokuapp.com/reviews/1`)
      .then(res => {
        const location_id = res.data[0];
        this.setState({ location_id });

      });


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
            <ul key={this.state.location_id.id}>
              <li>
                {" "}
                <p>User: {this.state.location_id.userName},</p>{" "}
              </li>
              <li>
                {" "}
                <p>Rating: {this.state.location_id.rating},</p>{" "}
              </li>
              <li>
                {" "}
                <p>Comments: {this.state.location_id.comments}</p>{" "}
              </li>
            </ul>
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
export default DetailsPanel;
