import React, { useState, useEffect } from "react";
/* global google */

import styled from "styled-components";

import { withRouter, Link } from "react-router-dom";

import * as ROUTES from "../Routes/routes";

const Landing = props => {
  const [currentActivity, setCurrentActivity] = useState("code");
  const [number, setNumber] = useState(1);

  const activity = ["code", "study", "stream"];

  function updateText() {
    setCurrentActivity(activity[number]);
    return number === activity.length - 1
      ? setNumber(0)
      : setNumber(number + 1);
  }

  useEffect(() => {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("exploreAutoComplete")
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
      props.setPlace(autocomplete.getPlace());
    });
  }, []);

  useEffect(() => {
    setTimeout(updateText, 2000);
  }, [number]);

  return (
    <LandingPageContainer>
      <SearchComponent>
        <h2>
          Find a place to <span>{currentActivity}</span> near you
        </h2>

        <InputAndButtonContainer>
          <Input id="exploreAutoComplete" placeholder="Explore" size="45" />
          <GoButton to={ROUTES.HOME}>Go</GoButton>
        </InputAndButtonContainer>
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
`;

const LandingPageContainer = styled.div`
  background: url("/heroimage.svg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 94.2vh;
`;

const GoButton = styled(Link)`
  display: flex
  align-items: center;
  text-decoration: none;
  font-family: "Zilla Slab", serif;
  font-size: 2rem;
  color: black;
  border-radius: 0 10px 10px 0;
  background: gold;
  border: 1px solid gold;
  border-left: none;
  padding: 0 10px 0 10px;
  &:hover {
    background: yellow;
  }
`;

const Input = styled.input`
  height: 44px;
  border-radius: 10px 0 0 10px;
  border-right: none;
  border: 1px solid white;
  &::placeholder {
    vertical-align: center;
    font-size: 1rem;
  }
`;

const InputAndButtonContainer = styled.div`
  display: flex;
`;
