import React from "react";

import SignOutButton from "../Auth/SignOut.jsx";
import * as ROUTES from "../../Routes/routes";

import { AuthUserContext } from "../Session";

import { Box, Button, RoutedButton, Heading } from "grommet";

import styled from "styled-components";

const Navigation = () => (
  <Navbar>
    <Box direction="row" gap="small">
      <Heading level="3" margin="none">
        <i class="fas fa-wifi" style={{ color: "gold", margin: "0 10px" }}></i>
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
      <RoutedButton color="white" label="Login" path={ROUTES.SIGN_IN} />
      <RoutedButton color="gold" label="Sign Up" path={ROUTES.SIGN_UP} />
    </ul>
  </Box>
);

export default Navigation;

const Navbar = styled.div`
  position: absolute;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`;
