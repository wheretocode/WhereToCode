import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../Auth/SignOut.jsx';
import * as ROUTES from '../../Routes/routes';

import { AuthUserContext } from '../Session';

import { Box, Button, RoutedButton, Heading, Grommet } from 'grommet';
import AppBar from '../Styling/AppBar';




const Navigation = () => (
    <AppBar>
    <Box direction='row'>
      <Heading level='3' margin='none'>
      <Button label='HiveStack' path='/' plain='true' margin='none'/>
</Heading>
      </Box>
      <Box direction='row' justify='left' gap='small'>
        </Box>
    
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </AppBar>
);

const NavigationAuth = () => (
  <Box direction='row' justify='right' gap='small'>
  <ul>
      <RoutedButton label="Home" path={ROUTES.HOME} />
      < SignOutButton />
  </ul>
  </Box>
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