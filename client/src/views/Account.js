import React from 'react';

import { AuthUserContext, withAuthorization } from '../components/Session';
import { PasswordForgetForm } from '../components/Auth/PasswordForget.jsx';
import PasswordChangeForm from '../components/Auth/PasswordChange.jsx';
import UpdateUserForm from '../components/Auth/UpdateUser';

const AccountPage = () => (
    

    <AuthUserContext.Consumer>
        {/*takes in authUser from AuthUserContext as value. 
        Wraps the passwordForget Form & Password Change form */}
        {authUser => (
            <div>
                <h1>Account Page</h1>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
                <UpdateUserForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);

