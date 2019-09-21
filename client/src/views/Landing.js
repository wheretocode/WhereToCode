import React, { useState, useEffect } from "react";
import { Box, Heading, Paragraph, Grid } from "grommet";
import { CardContent } from "grommet-controls";
import { Card } from "grommet-controls";
import styled from "styled-components";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import Navigation from "../components/Navigation/index";

const Landing = () => {
  const [currentActivity, setCurrentActivity] = useState("code");
  const [number, setNumber] = useState(1);

  const activity = ["code", "study", "stream"];

  setTimeout(updateText, 2000);

  function updateText() {
    setCurrentActivity(activity[number]);
    number === activity.length - 1 ? setNumber(0) : setNumber(number + 1);
  }

  return (
    <LandingPageContainer>
      {/* <Navigation /> */}
      <SearchComponent>
        <h2>
          Find a place to <span>{currentActivity}</span> near you
        </h2>
        <div className="explore-btn">
          <input placeholder="Explore" size="45"></input>
          <button>Go</button>
        </div>
      </SearchComponent>
    </LandingPageContainer>
  );
};

export default Landing;

const SearchComponent = styled.div`
  padding-top: 22%;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0 0 2rem 0;
    color: white;
    fontfamily: "Roboto";
    font-size: 3rem;
  }
  span {
    color: gold;
  }
  .explore-btn {
    input {
      height: 2.5rem;
      border-radius: 10px 0 0 10px;
      border: 1px solid black;
      border-right: none;
    }
    button {
      font-size: 1rem;
      font-weight: bold;
      height: 2.64rem;
      width: 4rem;
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
  width: 100vw;
  height: 100vh;
  background: url("/heroimage.svg") no-repeat;
  background-size: cover;
`;
