import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp.jsx';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../Routes/routes';

import { Form, FormField, Button, Box, Heading } from 'grommet';

const SignInPage = () => (
    <Box align="center" background="#555555" height="100vh" pad="large">
        <Box>
        <Heading level="2" responsive="true" size="medium" alignSelf="center">Sign In</Heading>
        <SignInForm />
        <SignUpLink />
        </Box>
    </Box>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <Box width="medium">
            <Form onSubmit={this.onSubmit}>
                <FormField
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <FormField
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <Button disabled={isInvalid} type="submit" primary label="Sign In" />

                {error && <p>{error.message}</p>}
            </Form>
            </Box>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };