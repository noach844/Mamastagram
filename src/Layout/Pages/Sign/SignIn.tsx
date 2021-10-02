import React from 'react';
import { Header } from 'semantic-ui-react';
import { useAuth } from '../../../Auth/Auth';
import { SmartField, SmartForm } from '../../../Components/SmartForm';
import {
    LoginSchema,
    LoginInitialValues,
} from '../../../validations/UserSchemas';

export const SignIn = () => {
    const { signIn } = useAuth();
    return (
        <div>
            <Header>Sign In</Header>
            <SmartForm
                onSubmit={(data) => {
                    signIn(data.userName, data.password);
                }}
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
