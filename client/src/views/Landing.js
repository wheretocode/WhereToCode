import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlacesAutocomplete from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";

const Landing = ({ address, setAddress, handleSelect }) => {
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
    setTimeout(updateText, 2000);
  }, [number]);

  return (
    <LandingPageContainer>
      <SearchComponent>
        <h2>
          Find a place to <span>{currentActivity}</span> near you
        </h2>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <Input {...getInputProps({ placeholder: "Explore" })} />

              <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </SearchComponent>
    </LandingPageContainer>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyDHoSSopykjcVtpJm-Xzn4KeViNp1rgjGQ"
})(Landing);

const SearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
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

const Input = styled.input`
  height: 44px;
  width: 30rem;
  // not happy with this, but it works
  border-radius: 10px;
  border: 1px solid white;
  &::placeholder {
    vertical-align: center;
    font-size: 1rem;
  }
`;
