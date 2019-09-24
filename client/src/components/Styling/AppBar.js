import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Text, TextInput, Menu, Reference, RoutedButton } from 'grommet'

import { Box, Button as GrommetButton, Grommet } from 'grommet';

const AppBar = (props) => (
    <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='gold'
    pad='small'
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
    />
    );


    

    export default (AppBar);