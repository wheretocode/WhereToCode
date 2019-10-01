import React from "react";
import { withAuthorization } from "../components/Session";
import NetworkSpeed from "../components/NetworkSpeed/NetworkSpeed";

import Map from "../components/Map/Map.jsx";

const Home = ({ place }) => {
  console.log("props:", place);
  return (
    <div>
      <h1>Hello World</h1>
      <p>Home Page accessed by authorized user</p>
<<<<<<< HEAD
      <Map place={place} />
=======
      <NetworkSpeed />
      <Map />
>>>>>>> ddc9c22c1e44b8a37fd6316ab92ad8b40005a508
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
