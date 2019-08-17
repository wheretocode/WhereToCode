import React from 'react';

import { AuthUserContext, withAuthorization } from '../components/Session';
import { PasswordForgetForm } from '../components/Auth/PasswordForget.jsx';
import PasswordChangeForm from '../components/Auth/PasswordChange.jsx';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account Page</h1>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);