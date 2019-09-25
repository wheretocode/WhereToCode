import React from "react";

import SignOutButton from "../Auth/SignOut.jsx";
import * as ROUTES from "../../Routes/routes";

import { AuthUserContext } from "../Session";

import { Box, Button, RoutedButton, Heading, Anchor } from "grommet";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Navigation = () => (
  <Navbar>
    <Box direction="row" gap="small">
      <Heading level="3" margin="none">
        <i class="fas fa-wifi" style={{ color: "gold", margin: "0 20px" }}></i>
        <Button label="HiveStack" color="white" path="/" plain="true" />
      </Heading>
    </Box>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </Navbar>
);

const NavigationAuth = () => (
  <ul>
    <RoutedButton label="Home" path={ROUTES.HOME} />

    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <Box direction="row" justify="right" gap="small">
    <ul>
      <LoginLink to={ROUTES.SIGN_IN}>Login</LoginLink>
      <RegisterLink to={ROUTES.SIGN_UP}>Sign Up</RegisterLink>
    </ul>
  </Box>
);

export default Navigation;

const Navbar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`;

const RegisterLink = styled(Link)`
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

const LoginLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 10px;
  font-size: 1.5rem;
  padding: 5px 20px;
  font-family: "Zilla Slab", serif;
  border-radius: 5px;
`;
