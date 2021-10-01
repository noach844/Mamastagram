import React, {FC} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';

export const HeadersRouter: FC = () => {
    return (
        <Switch>
            <Route path="/sign" exact></Route>

            <Route path="*" exact>
                <Header />
            </Route>
        </Switch>
    );
};
