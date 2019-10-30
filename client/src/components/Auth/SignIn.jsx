import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "./SignUp.jsx";
import { PasswordForgetLink } from "./PasswordForget.jsx";
import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../Routes/routes";

import { Box, Heading } from "grommet";

import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  background: black;
  color: white;
  position: relative;
  margin-top: -140px;
  border-radius: 30px;
  border: 3px solid gold;
  border-bottom: none;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background: white;
  border: 3px solid gold;
`;

const StyledForm = styled.form`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center
text-align: center;
margin-top: 80px;
margin-bottom: 0px;
background: white;
width: 70%;

`;

const StyledSvg = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
`;

const StyledInput = styled.input`
  opacity: 0.5;
  // border-radius: 25px;
  border: none;
  border-bottom: 0.7px solid grey;
  color: grey;
  padding-left: 14px;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  font-family: "Poppins", serif;
  text-align: left;
  height: 30px;
  background: none;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ::placeholder: gold;
  width: 70%;
`;

//@@GOLD LOGIN BUTTON
const LoginButton = styled.button`
  width: 55%;
  border-radius: 10px;
  background: gold;
  border: 1px solid gold;
  color: black;
  height: 10%;
  text-align: center;
  margin-top: 8%;
  font-family: "Zilla Slab", serif;
  font-size: 2rem;
  margin-top: 100px;
`;

const SignInPage = () => (
  <Box align="center" background="#555555" height="100vh" pad="large">
    <Box>
      <Heading level="2" responsive="true" size="medium" alignSelf="center">
        Sign In
      </Heading>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </Box>
  </Box>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <FormContainer>
        <StyledHeader>
          <i
            class="fas fa-wifi fa-2x"
            style={{ color: "gold", marginRight: "14px" }}
          ></i>
          <h1>HiveStack</h1>
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
          >
            <circle fill="white" cx="0" cy="100" r="100" />
            <circle fill="white" cx="200" cy="100" r="100" />
          </StyledSvg>
        </StyledHeader>
        <StyledForm onSubmit={this.onSubmit}>
          <StyledInput
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <StyledInput
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />

          {error && <p>{error.message}</p>}
        </StyledForm>
        <LoginButton
          disabled={isInvalid}
          onClick={this.onSubmit}
          primary
          label="Sign In"
        >
          Login
        </LoginButton>
      </FormContainer>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
