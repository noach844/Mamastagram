import React, { Component } from 'react';
import { FC, ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';



export class ProtectedRoute extends Route {
    public render() {
        let isAuthenticated = localStorage.getItem('isAuthenticated')
        let redirectPath: string = '';
        if (!isAuthenticated) {
            redirectPath = '/sign';
        }

        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{pathname: redirectPath}}/>);
            return <Route {...this.props} component={renderComponent} render={undefined}/>;
        } else {
            return <Route {...this.props}/>;
        }
    }
}