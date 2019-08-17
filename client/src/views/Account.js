import React from 'react';

import { PasswordForgetForm } from '../components/Auth/PasswordForget.jsx';
import PasswordChangeForm from '../components/Auth/PasswordChange.jsx';

const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

export default AccountPage;