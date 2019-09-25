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
      <Link
        style={{ textDecoration: "none", color: "white", marginRight: "10px" }}
        to={ROUTES.SIGN_IN}
      >
        Login
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          border: "1px solid gold",
          backgroundColor: "gold",
          borderRadius: "5px",
          fontSize: "1.5rem",
          padding: "5px 20px",
          fontFamily: "'Zilla Slab', serif"
        }}
        to={ROUTES.SIGN_UP}
      >
        Sign Up
      </Link>
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
