import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../Auth/SignOut.jsx';
import * as ROUTES from '../../Routes/routes';

import { AuthUserContext } from '../Session';

import { Box, Button, RoutedButton, Heading, Grommet } from 'grommet';
import AppBar from '../Styling/AppBar';




const Navigation = () => (
  <div>
    <AppBar>
    <Box direction='row'  gap='small'>
      <Heading level='3' margin='none'>
      <Button label='HiveStack' path='/' plain='true' />
</Heading>
      </Box>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </AppBar>
  </div>
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
  <Box direction='row' justify='right' gap='small'>
  <ul>
      <RoutedButton label="Sign In" path={ROUTES.SIGN_IN} />
      <RoutedButton label="Sign Up" path={ROUTES.SIGN_UP} />
  </ul>
  </Box>

);

export default Navigation;