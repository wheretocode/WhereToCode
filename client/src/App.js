import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Box, Button as GrommetButton, Grommet } from 'grommet';
import AppBar from './components/Styling/AppBar';

import Navigation from './components/Navigation/index.jsx';
import Landing from './views/Landing';
import SignUpPage from './components/Auth/SignUp.jsx';
import SignInPage from './components/Auth/SignIn.jsx';
import Home from './views/Home';

import * as ROUTES from './Routes/routes';
import { withAuthentication } from './components/Session';

const theme = {
  global: {
    font: {
      family:'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const App = () => (
  <Grommet theme={theme}>
  <Router>
    <Navigation />
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.HOME} component={Home} />
  </Router>
  </Grommet>

);

export default withAuthentication(App);