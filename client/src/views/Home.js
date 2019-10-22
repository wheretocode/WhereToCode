import React from "react";
import { withAuthorization } from "../components/Session";
import styled from "styled-components";
// import NetworkSpeed from "../components/NetworkSpeed/NetworkSpeed";

import Map from "../components/Map/Map.jsx";

const Home = ({ placeId, coordinates, address }) => {
  return (
    <MapContainer>
      {/* <NetworkSpeed /> */}
      <Map placeId={placeId} coordinates={coordinates} address={address} />
    </MapContainer>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
// export default Home;

const MapContainer = styled.div`
  width: 100vw;
`;
