//@ imports
import React, { useState } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

//@ components

import Navigation from "./components/Navigation/index";
import { SignUpForm } from "./components/Auth/SignUp.jsx";
import SignInPage from "./components/Auth/SignIn.jsx";
import PasswordForgetPage from "./components/Auth/PasswordForget.jsx";
import { withAuthentication } from "./components/Session";
import Footer from "./components/Footer/Footer.jsx";

import { Grommet } from "grommet";
import "./App.css";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

//@ views
import Landing from "./views/Landing";
import Home from "./views/Home";
import AccountPage from "./views/Account";
// import NetworkPage from "./views/Network";

//@ utils
import * as ROUTES from "./Routes/routes";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const App = ({ history }) => {
  const [address, setAddress] = useState(""); //ChIJJ61u3ZsmQYYRwYz9_mgRu2o
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [placeId, setPlaceId] = useState("");

  const handleSelect = async value => {
    const result = await geocodeByAddress(value);
    const latLng = await getLatLng(result[0]);
    console.log(result[0]);
    setPlaceId(result[0].place_id);
    setAddress(value);
    setCoordinates(latLng);
    history.push(ROUTES.HOME);
  };

  return (
    <Grommet theme={theme}>
      {/* <Navigation /> */}
      <Route
        exact
        path={ROUTES.LANDING}
        render={props => (
          <Landing
            {...props}
            handleSelect={handleSelect}
            address={address}
            setAddress={setAddress}
            setCoordinates={setCoordinates}
            setPlaceId={setPlaceId}
            coordinates={coordinates}
            placeId={placeId}
          />
        )}
      />

      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

      <Route
        exact
        path={ROUTES.HOME}
        render={props => (
          <Home
            {...props}
            address={address}
            coordinates={coordinates}
            placeId={placeId}
          />
        )}
      />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      {/* <Route path={ROUTES.NETWORK} component={NetworkPage} /> */}
      {/* <Footer /> */}
    </Grommet>
  );
};

export default withRouter(withAuthentication(App));
