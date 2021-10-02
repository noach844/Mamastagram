import React, { FC } from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import './Sign.css';
import { useEffect } from 'react';
import cookie from 'react-cookies';

export const Sign: FC = () => {
    useEffect(() => {
        let isAuthenticated = cookie.load('access_token');
        if (isAuthenticated) {
            window.location.pathname = '/';
        }
    }, []);
    return (
        <div className="sign-container">
            <Segment className="forms-container">
                <Grid
                    columns={3}
                    relaxed="very"
                    stackable
                    style={{ width: '100%' }}
                >
                    <Grid.Column verticalAlign="middle" width={7}>
                        <h1 className="logo-header">Mamastagram</h1>
                        <SignIn />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Divider vertical>Or</Divider>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={7}>
                        <SignUp />
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    );
};
