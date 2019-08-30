//@ imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//@ components
import Navigation from './components/Navigation/index.jsx';
import SignUpPage from './components/Auth/SignUp.jsx';
import SignInPage from './components/Auth/SignIn.jsx';
import PasswordForgetPage from './components/Auth/PasswordForget.jsx';
import { withAuthentication } from './components/Session';

//@ views
import Landing from './views/Landing';
import Home from './views/Home';
import AccountPage from './views/Account';

//@ utils
import * as ROUTES from './Routes/routes';



const App = () => (
  <Router>
    <Navigation />
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route
      path={ROUTES.PASSWORD_FORGET}
      component={PasswordForgetPage}
    />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
  </Router>
);

export default withAuthentication(App);