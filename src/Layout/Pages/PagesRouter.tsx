import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Sign } from './Sign/Sign';
import { ProtectedRoute } from '../../Components/ProtectedRoute/ProtectedRoute';

export const PagesRouter: FC = () => {
    return (
        <Switch>
            <ProtectedRoute path="/" component={Home} exact/>
            <Route path="/sign" component={Sign} />
        </Switch>
    );
};
