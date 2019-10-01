import React, { Component } from "react";
import Script from "react-load-script";

import SingleMapCard from "./SingleMapCard";

/*global google*/

class MapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.locations.map(location => {
          return (
            <div>
              <SingleMapCard
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
      </>
    );
  }
}

export default MapCards;
