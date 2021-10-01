import React, { FC } from 'react';
import { Sticky } from 'semantic-ui-react';
import { Navbar } from '../../Components/Navbar/Navbar';

export const Header: FC = () => {
    return (
        <div>
            <Sticky>
                <Navbar />
            </Sticky>
        </div>
    );
};
