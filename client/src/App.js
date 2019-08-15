import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/index.jsx';
import Landing from './views/Landing';
import SignUpPage from './components/Auth/SignUp.jsx';
import SignInPage from './components/Auth/SignIn.jsx';
import Home from './views/Home';

import * as ROUTES from './Routes/routes';
import { withAuthentication } from './components/Session';


const App = () => (
  <Router>
    <Navigation />
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.HOME} component={Home} />
  </Router>
);

export default withAuthentication(App);