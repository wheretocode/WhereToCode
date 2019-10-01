//@ imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//@ components

import Navigation from './components/Navigation/index.jsx';
import SignUpPage from './components/Auth/SignUp.jsx';
import SignInPage from './components/Auth/SignIn.jsx';
import PasswordForgetPage from './components/Auth/PasswordForget.jsx';
import { withAuthentication } from './components/Session';

import { Grommet } from 'grommet';
import './App.css';


//@ views
import Landing from './views/Landing';
import Home from './views/Home';
import AccountPage from './views/Account';
import Review from './views/Review';

//@ utils
import * as ROUTES from './Routes/routes';

//@theme
import Theme from './components/Styling/Theme';

const hivestack =     
{
  global: {
    colors: {
      brand: "#F0BE27",
      border: {
        dark: "#ebebeb",
        light: "#444444"
      },
      background: "#F4F4F2",
      placeholder: "rgba(68, 68, 68, 0.5)",
      control: {
        dark: "#F0BE27",
        light: "#0F41D8"
      },
      accent_1: "#ffdd00",
      accent_2: "#b39b00",
      accent_3: "#fff7bf",
      accent_4: "#ffee80",
      neutral_1: "#3c0099",
      neutral_2: "#2a006b",
      neutral_3: "#d8bfff",
      neutral_4: "#b280ff",
      neutral_5: "#ba0098"
    },
    elevation: {
      none: "none",
      xsmall: "0px 1px 2px rgba(68, 68, 68, 0.5)",
      small: "0px 2px 4px rgba(68, 68, 68, 0.5)",
      medium: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      large: "0px 6px 12px rgba(68, 68, 68, 0.5)",
      xlarge: "0px 8px 16px rgba(68, 68, 68, 0.5)"
    },
    drop: {
      background: "rgb(233, 233, 229)",
      shadow: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      border: {
        radius: "3px"
      }
    },
    input: {
      border: {
        radius: "16px"
      }
    },
    font: {
      family: "'Roboto', sans-serif",
    }
  },
  layer: {
    background: "#F4F4F2",
    overlay: {
      background: "rgba(68, 68, 68, 0.5)"
    },
    border: {
      radius: "16px"
    }
  },
  checkBox: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444"
      }
    },
    check: {
      radius: "16px"
    },
    toggle: {
      radius: "4px"
    }
  },
  anchor: {
    color: {
      dark: "#F0BE27",
      light: "#0F41D8"
    }
  },
  heading: {
    font: false
  },
  radioButton: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444"
      }
    }
  },
  button: {
    border: {
      radius: "16px"
    }
  }
}

const App = () => (
  <Grommet theme={hivestack}>
  <Router>
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route
      path={ROUTES.PASSWORD_FORGET}
      component={PasswordForgetPage}
    />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route exact path={ROUTES.REVIEW} component={Review} />
  </Router>
  </Grommet>

);

export default withAuthentication(App);
