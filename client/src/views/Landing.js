import React, { useState, useEffect } from "react";

import styled from "styled-components";

const Landing = () => {
  const [currentActivity, setCurrentActivity] = useState("code");
  const [number, setNumber] = useState(1);

  const activity = ["code", "study", "stream"];

  function updateText() {
    console.log("...in Landing");
    setCurrentActivity(activity[number]);
    return number === activity.length - 1
      ? setNumber(0)
      : setNumber(number + 1);
  }

  useEffect(() => {
    setTimeout(updateText, 2000);
  }, [number]);

  return (
    <LandingPageContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0 0 2rem 0;
    color: white;
    font-family: "'Zilla Slab', serif";
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
  background: url("/heroimage.svg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
