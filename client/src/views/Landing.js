import React, { useState, useEffect } from "react";
/* global google */

import Navigation from "../components/Navigation/index";

import styled from "styled-components";

import { withRouter, Link } from "react-router-dom";

import mockup from '../assets/mockup.png';
import hours from '../assets/hours.jpg';
import explore from '../assets/explore.jpg';
import reviews from '../assets/reviews.jpg';

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
          <h3>Work Easier</h3>
          <p>Finding a place to work away form the home or office doesn't need to be a hassle. Find locations that meet your needs no matter where you are!</p>
          <ExploreButton to={ROUTES.HOME}>Explore →</ExploreButton>
        </InfoBox>
        <FeatureBox>
          <FeaturePic src={explore} />
          <h3>Find New Places</h3>
          <p>Whether you're traveling or looking to get out of the house in your own home, we've got you covered.</p>
        </FeatureBox>
        <FeatureBox>
          <FeaturePic src={hours} />
          <h3>Get Info</h3>
          <p>Find the location's available hours, address, phone number, and more.</p>
        </FeatureBox>
        <FeatureBox>
          <FeaturePic src={reviews} />
          <h3>Pick the Best One</h3>
          <p>Read reviews from remote workers like you! Read about the speed and reliability of the internet, the noise level, and other important factors.</p>
        </FeatureBox>
      </FeaturesInfo>
      <MockupContainer>
          <Mockup src={mockup} />
        <LargeMarketing>
          <h3>Find Great Locations</h3>
          <p>Whether you're looking for some free wifi to work while you're traveling or you're just wanting to get away from the house or office for a change of scenery, The HiveStack is built to help you find the best place to work.</p>
          <Bullets>
            <div><i class="fa fa-coffee fa-2x"></i><p>Find coffee shops and cafes</p></div>
            <div><i class="fas fa-wifi fa-2x"></i><p>Check wifi speeds and reliability</p></div>
            <div><i class="fas fa-laptop fa-2x"></i><p>Sit down and get some work done</p></div>
          </Bullets>
        </LargeMarketing>
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
  @media(max-width: 500px){
    flex-direction: column;
  }
`

const InfoBox = styled.div`
  width: 23%;
  margin: 0 1%;
  h3 {
    font-size: 32px;
    font-family: "Zilla Slab", serif;
    font-weight: bold;
    margin-top: 0;
    padding-left: 10px;
  }
  p {
    font-size: 18px;
    color: #636363
    padding-left: 10px
  }
  @media(max-width: 500px){
    width: 95%;
    margin-bottom: 20px;
  }
`

const FeatureBox = styled(InfoBox)`
  border: 1px solid #ECECEC;
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
`
const FeaturePic = styled.img`
  width: 100%;
  height: 185px;
`

const MockupContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media(max-width: 500px){
    flex-direction: column;
  }
`

const Mockup = styled.img`
  width: 45%;
  margin: 50px 0;
  @media(max-width: 500px){
    width: 90%;
  }
`
const ExploreButton = styled(GoButton)`
  font-size: 1.1rem;
  border-radius: 10px;
  border-left: 1px solid gold;
  font-weight: bold;
  width: 125px;
  padding: 10px;
`

const LargeMarketing = styled(InfoBox)`
  width: 40%;
  margin-top: 80px;
`

const Bullets = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-content: center;
    margin-bottom: 10px;
    i {
      padding-right: 20px;
    }
    p{
      margin-top: 0;
      color: black;
      font-size: 16px;
    }
  }
`