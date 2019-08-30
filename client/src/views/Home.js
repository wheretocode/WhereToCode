import React from 'react';
import { withAuthorization } from '../components/Session';

const Home = () => (
    <div>
        <h1>Hello World</h1>
        <p>Home Page accessed by authorized user</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);