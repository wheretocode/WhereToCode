import React, { useState, useEffect } from "react";
import { Box, Heading, Paragraph, Grid } from "grommet";
import { CardContent } from "grommet-controls";
import { Card } from "grommet-controls";
import styled from "styled-components";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const Landing = () => {
  const [currentActivity, setCurrentActivity] = useState("code");
  const [number, setNumber] = useState(1);

  const activity = ["code", "study", "stream"];

  setTimeout(updateText, 3000);

  function updateText() {
    setCurrentActivity(activity[number]);
    number === activity.length - 1 ? setNumber(0) : setNumber(number + 1);
  }

  return (
    <>
      <div>
        <MissionStatement>
          <h2>
            Find a place to <span>{currentActivity}</span> near you
          </h2>
          <div className="explore-btn">
            <input placeholder="Explore"></input>
            <button>Go</button>
          </div>
        </MissionStatement>
        <img src="/heroimage.svg" style={imgStyle} />
      </div>
    </>
  );
};

export default Landing;

const imgStyle = {
  width: "100vw"
};

const MissionStatement = styled.div`
  position: absolute
  top: 50%;
  left: 25%;
  color: white;
  fontFamily: 'Roboto';
  font-size: 2.2rem;
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
      height: 2.64rem;
      width: 3rem;
      border-radius: 0 10px 10px 0;
      background: gold;
      border: 1px solid gold;
      border-left: none;
    }
  }
`;
