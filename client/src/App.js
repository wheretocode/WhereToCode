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
      face: "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
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
  </Grommet>

);

export default withAuthentication(App);