import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../Firebase";
import * as firebase from 'firebase';
import 'firebase/auth';
import axios from 'axios';
// import * as ROUTES from "../../Routes/routes";


import { Form, FormField, Button, Box, Heading } from 'grommet';


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



        const currentUser = firebase.auth().currentUser;
        const currentUserUid = firebase.auth().currentUser.uid;
        console.log('currentUser', currentUser);
        console.log('currentUserUid', currentUserUid);



        currentUser.updateEmail(email)
            .then(user => {
                const { email, userName } = this.state;

                const updateUser = {
                    userName: userName,
                    email: email
                }

                axios.put(`http://localhost:8080/users/${currentUserUid}`, updateUser)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            });



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
                <button type="submit" onClick={this.onSubmit}>update Firebase and BE</button>
            </Box>
        )
    }
}

const UpdateUserForm = withRouter(withFirebase(UpdateUser))

export default UpdateUserForm;