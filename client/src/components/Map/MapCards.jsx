import React, { Component } from "react";
import SingleMapCard from "./SingleMapCard";

import axios from 'axios';

/*global google*/

class MapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidUpdate() {
    console.log(this.props.locations);
    let req = this.props.locations;
    // let locArr = req.map(req => {
    //   return { locationName: req.name, locationGoogleId: req.id };
    // })
    // console.log("locArr", locArr);
    // if (locArr.length > 0) {
    //   axios.post('http://localhost:8080/locations', locArr)
    //     .then(res => {
    //       console.log('res.data post call', res);
    //     })
    //     .then(res => {
    //       axios.get('http://localhost:8080/locations')
    //     })
    //     .then(res => {
    //       console.log("res.data get call", res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // } else {
    //   console.log("nothing to post");
    // }

  }
  render() {
    return (
      <>
        {this.props.locations.map(location => {
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
      </>
    );
  }
}

export default MapCards;
