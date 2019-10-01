import React, {useState} from 'react';
import { withAuthorization } from '../components/Session';
import Navigation2 from '../components/Navigation/index2';
import Photos from '../components/Review/Photos';
import DetailBar from '../components/Review/DetailBar';
import Details from '../components/Review/Details';
import { Box, } from 'grommet'


import SignUpPage from '../components/Auth/SignUp';




const Review = () => (
        <Box>
            <Navigation2 />
            <Photos/>
            <DetailBar/>
            <Details/>
    
  </Box>
  );

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Review);
