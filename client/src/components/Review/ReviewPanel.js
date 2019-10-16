import React, { Component } from 'react';
import TextArea from "../Review/TextArea";
import Select from "../Review/Select";
import Button from "../Review/Button";

  const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };
  
  
  class ReviewPanel extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          user_id: '',
          rating: '',
          internet_rating: '',
          comment: ''
        },
        user_id: ["8","4","2"],
        rating: ["1", "2", "3"],
        internet_rating: ["1", "2", "3"],
      };
      
      this.handleTextArea = this.handleTextArea.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
  
  
  
    handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        }),
      );
    }
  
    handleTextArea(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            comment: value
          }
        }),
      );
    }
  
  
  
    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.newUser;
  
      fetch("https://wheretocode-master.herokuapp.com/reviews", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
        });
      });
    }
  
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        newUser: {
          user_id: '',
          rating: '',
          comment: '',
          internet_rating: ''
        }
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          {/*User */}
          <Select
            title={"User Id"}
            name={'user_id'}
            options={this.state.user_id}
            value={this.state.newUser.user_id}
            placeholder={"Select User Id"}
            handleChange={this.handleInput}
          />
          {/* Rating */}
          <Select
            title={"Rating"}
            name={'rating'}
            options={this.state.rating}
            value={this.state.newUser.rating}
            placeholder={"Select Rating"}
            handleChange={this.handleInput}
          />
          {/*Internet Rating */}
          <Select
            title={"Interet Rating"}
            name={'internet_rating'}
            options={this.state.internet_rating}
            value={this.state.newUser.internet_rating}
            placeholder={"Select Internet Rating"}
            handleChange={this.handleInput}
          />
          {/*Comment */}
          <TextArea
            title={"Comment"}
            rows={10}
            value={this.state.newUser.comment}
            name={'comment'}
            handleChange={this.handleTextArea}
            placeholder={"Leave a comment"}
          />
          {/*Submit */}
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />
          {/* Clear form */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />
        </form>
      );
    }
  }

  export default ReviewPanel;
  
