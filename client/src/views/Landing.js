import React, { useState, useEffect } from "react";
/* global google */

import styled from "styled-components";

import { withRouter, Link } from "react-router-dom";

const Landing = props => {
  const [currentActivity, setCurrentActivity] = useState("code");
  const [number, setNumber] = useState(1);
  const [place, setPlace] = useState({});

  const activity = ["code", "study", "stream"];

  function updateText() {
    setCurrentActivity(activity[number]);
    return number === activity.length - 1
      ? setNumber(0)
      : setNumber(number + 1);
  }

  useEffect(() => {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("exploreAutoComplete"),
      {
        types: ["establishment"]
      }
    );
    autocomplete.setFields([
      "address_components",
      "formatted_address",
      "geometry",
      "icon",
      "name",
      "place_id"
    ]);
    autocomplete.addListener("place_changed", () => {
      setPlace(autocomplete.getPlace());
    });
  }, []);

  useEffect(() => {
    setTimeout(updateText, 2000);
  }, [number]);

  const searchNearbyLocations = () => {
    // props.history.push("/home");
    props.history.push({
      pathname: "/home",
      state: { place }
    });
  };

  return (
    <LandingPageContainer>
      <SearchComponent>
        <h2>
          Find a place to <span>{currentActivity}</span> near you
        </h2>
        <div className="explore-btn">
          <input id="exploreAutoComplete" placeholder="Explore" size="45" />\
          <button onClick={searchNearbyLocations}>Go</button>
        </div>
      </SearchComponent>
    </LandingPageContainer>
  );
};

export default withRouter(Landing);

const SearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0 0 32px 0;
    color: white;
    font-family: "'Zilla Slab', serif";
    font-size: 48px;
  }
  span {
    color: gold;
  }
  .explore-btn {
    input {
      height: 44px;
      border-radius: 10px 0 0 10px;
      border-right: none;
      border: 1px solid white;
    }
    button {
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
      height: 48px;
      width: 64px;
      border-radius: 0 10px 10px 0;
      background: gold;
      border: 1px solid gold;
      border-left: none;
      &:hover {
        background: yellow;
      }
    }
  }
`;

const LandingPageContainer = styled.div`
  background: url("/heroimage.svg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
