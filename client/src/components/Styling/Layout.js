import React from 'react';
import { Grommet } from 'grommet';
// import { materiallight } from 'grommet-controls/themes';
import AppBar from './AppBar';
import Footer from './Footer';

const Layout = props => (
  <Grommet>
    {/* <AppBar /> */}
    {props.children}
    <Footer />
  </Grommet>
);

export default Layout;