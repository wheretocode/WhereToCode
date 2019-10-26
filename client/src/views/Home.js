import React from "react";
import { withAuthorization } from "../components/Session";
import Navigation from "../components/Navigation/index";
import Map from "../components/Map/Map.jsx";
import styled from "styled-components";

const HomeNavBar = styled.div`
  position: static;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    color: black;
  }
  a {
    color: black;
  }
`;

const Home = ({ place }) => {
  return (
    <div>
      <HomeNavBar>
        <Navigation />
      </HomeNavBar>
      <Map place={place} />
    </div>
  );
};

export default Home;
