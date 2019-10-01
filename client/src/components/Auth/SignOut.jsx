import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../Firebase";
<<<<<<< HEAD
=======
import styled from "styled-components";
>>>>>>> c1f2341463da15424afd2cf57d26e9e3ce150a5b
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
<<<<<<< HEAD
        </button>
=======
        </Signout>
>>>>>>> c1f2341463da15424afd2cf57d26e9e3ce150a5b
      </>
    );
  }
}

const SignOutButton = withRouter(withFirebase(SignOutButton1));

export default SignOutButton;
<<<<<<< HEAD
=======

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
>>>>>>> c1f2341463da15424afd2cf57d26e9e3ce150a5b
