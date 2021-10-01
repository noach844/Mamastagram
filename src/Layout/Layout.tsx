import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PagesRouter } from './Pages/PagesRouter';
import { HeadersRouter } from './Header/HeadersRouter';

export const Layout: FC = () => {
    return (
        <div>
            <Router>
                <HeadersRouter />
                <PagesRouter />
            </Router>
        </div>
    );
};
