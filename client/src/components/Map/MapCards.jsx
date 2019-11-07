import React, { Component } from "react";
import SingleMapCard from "./SingleMapCard";
import styled from "styled-components";

class MapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // {console.log(this.props)}

    return (
      <MapCardsContainer>
        {this.props.locations.map(location => {
          // {console.log(location)}
          return (
            <div>
              <SingleMapCard
                key={location.id}
                location={location.name}
                address={location.address}
                rating={location.rating}
                icon={location.icon}
                id={location.id}
                requestDetails={this.props.requestDetails}
              />
            </div>
          );
        })}
      </MapCardsContainer>
    );
  }
}

export default MapCards;

const MapCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 86%;
  justify-content: center;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
