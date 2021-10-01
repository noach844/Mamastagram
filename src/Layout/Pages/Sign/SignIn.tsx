import React from 'react';
import { Header } from 'semantic-ui-react';
import { login } from '../../../Auth/Auth';
import { SmartField, SmartForm } from '../../../Components/SmartForm';
import {
    LoginSchema,
    LoginInitialValues,
} from '../../../validations/UserSchemas';

export const SignIn = () => {
    return (
        <div>
            <Header>Sign In</Header>
            <SmartForm
                onSubmit={login}
                schema={LoginSchema}
                initialValues={LoginInitialValues}
                buttonProps={{ content: 'Sign In', primary: true }}
            >
                <SmartField
                    label="Username:"
                    name="userName"
                    control={'Input'}
                    placeholder="Enter Username..."
                />
                <SmartField
                    label="Password:"
                    name="password"
                    control={'Input'}
                    placeholder="Enter Password..."
                    type="password"
                />
            </SmartForm>
        </div>
    );
};
