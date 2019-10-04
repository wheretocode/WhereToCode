import React, { Component } from 'react';

import Ratings from 'react-ratings-declarative';

class Rating extends Component {
    changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }

    render() {
      return (
          <Ratings
          >
            <Ratings.Widget />
          </Ratings>
      );
    }
}


class Bar extends Component {
  render() {
    return (
      <Ratings>
        <Ratings.Widget />
      </Ratings>
    );
  }
}

export default Ratings;