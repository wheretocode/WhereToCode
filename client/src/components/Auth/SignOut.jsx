import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../Routes/routes';


class SignOutButton1 extends Component {
  constructor(props) {
    super(props);
  }

  submit = e => {
    this.props.firebase
      .doSignOut()
      .then(() => {
        this.props.history.push(ROUTES.LANDING);
      })
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.submit}>
          Sign Out
    </button>

      </>
    )
  }
}

const SignOutButton = withRouter(withFirebase(SignOutButton1));

export default SignOutButton;