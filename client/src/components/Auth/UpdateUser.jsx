import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../Firebase";
// import * as ROUTES from "../../Routes/routes";


import { Form, FormField, Button, Box, Heading } from 'grommet';

// INITIAL STATE
    const INITIAL_STATE = {
        email: '',
        userName: '',
        error: null,
    };

class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    // METHODS
        onSubmit = e => {
            e.preventDefault()
            const { email, userName } = this.state;
            
            // -*- Docs -*- 
            // https://firebase.google.com/docs/auth/web/manage-users

            const currentUser = this.props.firebase.auth().currentUser
                console.log('currentUser',currentUser)
                
            // STEPS 
                // - 1 - // Update Firebase EMAIL (Forgot PW has own route)?? 

                // currentUser.updateEmail(email)
                //     .then(function() {
                //         // Update successful.
                //         axios.put('', { email, userName });
                //     }).catch(function(error) {
                //         // An error happened.
                //     });

                // - 2 - // Update BE DB with Email / Username ?? 
            
        }
        
        onChange = e => {
            e.preventDefault()
            this.setState({ [e.target.name]: e.target.value });
        }

    render() {
        const { email, userName, error } = this.state;

        return (
            <Box width="medium">
                <Form onSubmit={this.onSubmit}>
                    <FormField
                        name="userName"
                        value={userName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Username"
                    />

                    <FormField
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email"
                    />

                    <Button 
                        type="submit" 
                        primary label="Update Homie" 
                    />
                </Form>
            </Box>
        )
    }
}

const UpdateUserForm = withRouter(withFirebase(UpdateUser))

export default UpdateUserForm;