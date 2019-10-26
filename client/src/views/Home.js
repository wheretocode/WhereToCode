import React from "react";
import Navigation from "../components/Navigation/index";
import Map from "../components/Map/Map.jsx";
import styled from "styled-components";

const HomeBackground = styled.div`
  background-image: url("/light_honeycomb.png");
`;

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
    <HomeBackground>
      <HomeNavBar>
        <Navigation />
      </HomeNavBar>
      <Map place={place} />
    </HomeBackground>
  );
};

export default Home;
