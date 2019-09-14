import React from 'react';
import { withAuthorization } from '../components/Session';
import NetworkSpeed from '../components/NetworkSpeed/NetworkSpeed'

import Map from '../components/Map/Map.jsx'

const Home = () => (
    <div>
        <h1>Hello World</h1>
        <NetworkSpeed />
        <Map />
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);