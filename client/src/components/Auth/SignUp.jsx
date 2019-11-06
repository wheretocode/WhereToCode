import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../Routes/routes";

import styled from "styled-components";

import axios from "axios";

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%
height: 100%;
border-radius: 25px;
background:white;
border: 3px solid gold;

`;

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
  margin-top: -70px;
  border-radius: 30px;
  border: 3px solid gold;
  border-bottom: none;
`;

const StyledForm = styled.form`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center
text-align: center;
margin-top: 30px;
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
  padding-left: 10px;
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

//@@GOLD SIGNUP BUTTON
const SignUpButton = styled.button`
  width: 55%;
  border-radius: 10px;
  background: black;
  border: 3px solid gold;
  color: white;
  height: 10%;
  text-align: center;
  margin-top: 8%;
  font-family: "Zilla Slab", serif;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpFormBase = props => {
  //Hooks to update state 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = event => {

    //send email & pw values form to firebase for authentication
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(user => {
        const newUser = {
          firebase_user_id: user.user.uid,
          userName: username,
          email: email
        };
        console.log("new user:", newUser);
        //send FB authenticated user UID, username and email to wheretocode Database
        axios
          .post(
            // "https://wheretocode-master.herokuapp.com/auth/register",
            'http://localhost:8080/auth/register',
            newUser
          )
          .then(res => {
            console.log(res.data);
            setUsername("");
            setEmail("");
            setPasswordOne("");
            props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        setError(error);
      });
    event.preventDefault();
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";



  return (


    <FormContainer>
      <StyledHeader>
        <i class="fas fa-wifi fa-2x" style={{ color: "gold", marginRight: "14px" }}></i>
        <h1 >HiveStack</h1>
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
          <circle fill="white" cx="0" cy="100" r="100" />
          <circle fill="white" cx="200" cy="100" r="100" />
        </StyledSvg>
      </StyledHeader>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <StyledInput
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <StyledInput
          name="passwordOne"
          value={passwordOne}
          onChange={e => setPasswordOne(e.target.value)}
          type="password"
          placeholder="Password"

        />
        <StyledInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={e => setPasswordTwo(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />

      </StyledForm>
      <SignUpButton disabled={isInvalid} onClick={onSubmit} primary label="Sign Up" >Sign Up</SignUpButton>
    </FormContainer >


  );
};

const SignUpLink = () => (
  <h6 alignSelf="center" margin="small">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </h6>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
// export default SignUpPage;
export { SignUpForm, SignUpLink };
