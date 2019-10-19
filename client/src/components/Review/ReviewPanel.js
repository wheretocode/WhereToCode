// IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components'

// COMPONENTS
import TextArea from "../Review/TextArea";
import Select from "../Review/Select";
import Button from "../Review/Button";

// STYLES
const buttonStyle = {
  margin: "10px 10px 10px 10px",
};

// STYLED COMPONENTS
const StyleModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  font-size: 12px;
`
const Header = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  
  color: #FBD702;

  width: 100%;
  margin-bottom: 15px;
`
const STYLED_form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 15px;
  margin: 5px 0 5px 0;

  .buttonContainer {
    display: flex;
    justify-content: center;
  }

  border-radius: 10px 10px 10px 10px;
  background-color: white;
`
// COMPONENT
class ReviewPanel extends Component {
  constructor(props) {
    super(props);

  // STATE
    this.state = {
      newUser: {
        user_id: '',
        rating: '',
        internet_rating: '',
        comments: ''
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

  // METHODS
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
          comments: value
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
        comments: '',
        internet_rating: ''
      }
    });
  }

  // RENDER
  render() {
    return (
      <StyleModal>
        <Header> Leave a Review </Header>
      {/* // -- // */}
        <STYLED_form onSubmit={this.handleFormSubmit}>
          {/*User 
            Do we need the user to enter their own ID here or can we get that off state? 
          */}
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
              title={"Comments"}
              rows={10}
              value={this.state.newUser.comments}
              name={'comment'}
              handleChange={this.handleTextArea}
              placeholder={"Leave a comment"}
            />
          {/*Submit */}
      {/* // -- // */}
          <div className='buttonContainer'>
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
          </div>
        </STYLED_form>
      </StyleModal>
    );
  }
}

// EXPORT
  export default ReviewPanel;