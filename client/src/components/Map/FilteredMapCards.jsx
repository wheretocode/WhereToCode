import React, { Component } from "react";
import SingleMapCard from "./SingleMapCard";
import styled from "styled-components";

class FilteredMapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MapCardsContainer>
        {this.props.locationsFilter.map(location => {
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

export default FilteredMapCards;

const MapCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow: scroll;
  margin-right: -50px;
  padding-right: 50px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
