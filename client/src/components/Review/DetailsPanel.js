import React from "react";
import axios from 'axios';

class DetailsPanel extends React.Component {
    state = {
      location_id: []
    }
  
    componentDidMount() {
      axios.get(`https://wheretocode-master.herokuapp.com/reviews/1`)
        .then(res => {
          const location_id = res.data;
          this.setState({ location_id });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.location_id.map(location=>
          <li>UserId: {location.user_id},  Rating: {location.rating}, Comments:{location.comments}</li>)}
        </ul>
      )
    }
  }






export default DetailsPanel;