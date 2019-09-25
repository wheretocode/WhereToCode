import React from 'react';
import { withAuthorization } from '../components/Session';


import Map from '../components/Map/Map.jsx'

const Home = () => (
    <div>
        <h1>Hello World</h1>
        <p>Home Page accessed by authorized user</p>
        <Map />
       
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);