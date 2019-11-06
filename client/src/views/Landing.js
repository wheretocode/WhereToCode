import React, { useState, useEffect } from "react";
/* global google */

import Navigation from "../components/Navigation/index";

import styled from "styled-components";

import { withRouter, Link } from "react-router-dom";

import mockup from '../assets/mockup.png';

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
      console.log(autocomplete.getPlace());
    });
  }, []);

  useEffect(() => {
    setTimeout(updateText, 2000);
  }, [number]);

  return (
    <LandingPageContainer>
      <Navigation />
      <LandingScreen>
      <SearchComponent>
        <h2>
          Find a place to <span>{currentActivity}</span> near you
        </h2>

        <InputAndButtonContainer>
          <Input id="exploreAutoComplete" placeholder="Explore" size="40" />
          <GoButton to={ROUTES.HOME}>Go</GoButton>
        </InputAndButtonContainer>
      </SearchComponent>
      </LandingScreen>
      <FeaturesInfo>
        <InfoBox>
          <h3>Marketing Blurb Here</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium nemo, voluptas culpa, alias libero dolor eveniet distinctio reiciendis, necessitatibus cumque ut optio. Delectus, sunt!</p>
          <ExploreButton to={ROUTES.HOME}>Explore →</ExploreButton>
        </InfoBox>
        <FeatureBox>
          <Placeholder></Placeholder>
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, porro.</p>
        </FeatureBox>
        <FeatureBox>
          <Placeholder></Placeholder>
          <h3>Feature 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, porro.</p>
        </FeatureBox>
        <FeatureBox>
          <Placeholder></Placeholder>
          <h3>Feature 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, porro.</p>
        </FeatureBox>
      </FeaturesInfo>
      <MockupContainer>
        <div>
          <Mockup src={mockup} />
        </div>
        <div>

        </div>
      </MockupContainer>
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
    font-weight: normal;

    span{
      font-weight: bold;
    }

    @media(max-width:500px){
      font-size: 28px;
      width: 80%;
      text-align: center;
      line-height: 1;
    }
  }
  span {
    color: gold;
  }
`;

const LandingPageContainer = styled.div`
`;

const LandingScreen = styled.div`
background: url("/heroimage.svg");
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

@media(max-width: 500px){
  height: 98vh;
}
`

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
  padding-left: 10px;
  &::placeholder {
    vertical-align: center;
    font-size: 1rem;
  }
  @media(max-width: 500){
    width: 50px;
  }
`;

const InputAndButtonContainer = styled.div`
  display: flex;
`;

const FeaturesInfo = styled.div`
  margin: 125px 2% 20px 2%;
  display: flex;
  justify-content: space-between;
`

const InfoBox = styled.div`
  width: 25%;
  padding: 0 10px;
  h3 {
    font-size: 32px;
    font-family: "Zilla Slab", serif;
    font-weight: bold;
    margin-top: 0;
  }
  p {
    font-size: 18px;
    color: #636363
  }
`

const FeatureBox = styled(InfoBox)`
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
`
const Placeholder = styled.div`
  width: 225px;
  height: 175px;
  border: 3px solid black;
`

const MockupContainer = styled.div`

`

const Mockup = styled.img`
  width: 45%;
  margin: 5%;
`
const ExploreButton = styled(GoButton)`
  font-size: 1.1rem;
  border-radius: 10px;
  border-left: 1px solid gold;
  font-weight: bold;
  width: 125px;
  padding: 10px;
`