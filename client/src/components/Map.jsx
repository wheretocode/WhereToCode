// Imports
import React, { Component } from 'react';

// Import React Script Library to load Google object
import Script from 'react-load-script';

class Search extends Component {
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: '',
      input: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }


  handleScriptLoad() {
    // Declare Options For Autocomplete
    let options = {
      types: ['(cities)'],
    };

    // Loads map
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
    });

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);

    // this.autocomplete.bindTo('bounds', map)

    this.autocomplete.setFields(['address_components', 'formatted_address']);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);    
  }

  handleInputChange = e => {
    
    this.setState({[e.target.name]: e.target.value})
  }
  
  handlePlaceSelect() {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    
    let address = addressObject.address_components;

    this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address
        }
      );
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHoSSopykjcVtpJm-Xzn4KeViNp1rgjGQ&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <input id="autocomplete" placeholder="" onChange={ this.handleInputChange } name={ this.state.input } value={this.state.search}
        />
        <div id="map" style={{ height: 1000 }}></div>
      </div>
    );
  }
}

export default Search;