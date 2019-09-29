import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../Firebase";
import styled from "styled-components";
import * as ROUTES from "../../Routes/routes";

class SignOutButton1 extends Component {
  constructor(props) {
    super(props);
  }

  submit = e => {
    this.props.firebase.doSignOut().then(() => {
      this.props.history.push(ROUTES.LANDING);
    });
  };

  render() {
    return (
      <>
        <Signout type="button" onClick={this.submit}>
          Sign Out
        </Signout>
      </>
    );
  }
}

const SignOutButton = withRouter(withFirebase(SignOutButton1));

export default SignOutButton;

const Signout = styled.button`
  text-decoration: none;
  color: black;
  border: 1px solid gold;
  background-color: gold;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 5px 20px;
  font-family: "Zilla Slab", serif;
  margin-right: 20px;
  &:hover {
    background-color: yellow;
  }
`;
