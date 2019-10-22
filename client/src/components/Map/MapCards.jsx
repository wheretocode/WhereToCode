import React from "react";
import styled from "styled-components";
import SingleMapCard from "./SingleMapCard";

/*global google*/

const MapCards = ({ locations }) => {
  return (
    <MapCardsContainer>
      {locations.map(location => {
        return (
          <SingleMapCard
            key={location.id}
            location={location.name}
            address={location.address}
            rating={location.rating}
            icon={location.icon}
            id={location.id}
          />
        );
      })}
    </MapCardsContainer>
  );
};

export default MapCards;

const MapCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
