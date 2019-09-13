import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../Routes/routes";

import axios from "axios";

import { Form, FormField, Button, Box, Text, Heading } from "grommet";

const SignUpPage = () => (
  <Box align="center" background="#555555" height="100vh" pad="large">
    <Heading level="2" responsive="true" size="medium" alignSelf="center">
      Sign Up
    </Heading>
    <SignUpForm />
  </Box>
);

const SignUpFormBase = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = event => {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(user => {
        const newUser = {
          firebase_user_id: user.uid,
          userName: username,
          email: email
        };
        axios
          .get("http://wheretocode-master.herokuapp.com/auth/register", newUser)
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
    <Box width="medium">
      <Form onSubmit={onSubmit}>
        <FormField
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <FormField
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address"
        />
        <FormField
          name="passwordOne"
          value={passwordOne}
          onChange={e => setPasswordOne(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <FormField
          name="passwordTwo"
          value={passwordTwo}
          onChange={e => setPasswordTwo(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <Button disabled={isInvalid} type="submit" primary label="Sign Up" />
      </Form>
    </Box>
  );
};

const SignUpLink = () => (
  <Text alignSelf="center" margin="small">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </Text>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };
