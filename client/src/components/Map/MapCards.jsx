import React, { Component } from "react";
import Script from "react-load-script";

import SingleMapCard from "./SingleMapCard";

/*global google*/

class MapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationDetails: [],
      id: []
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.locations !== prevProps.locations) {
  //     this.props.locations.map(location => {
  //       this.setState({
  //         id: [
  //           ...this.state.id,
  //           {
  //             id: location.id
  //           }
  //         ]
  //       });
  //     });
  //   }
  // }

  render() {
    return (
      <>
        {this.props.locations.map(location => {
          return (
            <div id="map">
              <SingleMapCard
                location={location.name}
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
