import React from 'react';
import { Header } from 'semantic-ui-react';
import { SmartField, SmartForm } from '../../../Components/SmartForm';
import {
    SignupInitialValues,
    SignupSchema,
} from '../../../validations/UserSchemas';

export const SignUp = () => {
    return (
        <div>
            <Header>Sign Up</Header>
            <SmartForm
                onSubmit={() => {}}
                schema={SignupSchema}
                initialValues={SignupInitialValues}
                buttonProps={{ content: 'Register', primary: true }}
            >
                <SmartField
                    label="Email:"
                    name="email"
                    control={'Input'}
                    placeholder="Enter Email..."
                />
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
                <SmartField
                    label="Confirm Password:"
                    name="confirmPassword"
                    control={'Input'}
                    placeholder="Confirm Password..."
                    type="password"
                />
            </SmartForm>
        </div>
    );
};
