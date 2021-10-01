import React, { FC } from 'react';
import { Button, Icon, Image, Input, Menu } from 'semantic-ui-react';
import { image } from 'faker';
import './Navbar.css';
import { logout } from '../../Auth/Auth';

export const Navbar: FC = () => {   
    return (
        <Menu pointing secondary>
            <Menu.Item>
                <a className="MamaLogo">Mamastegram</a>
            </Menu.Item>

            <Menu.Item>
                <Image src={image.avatar()} avatar />
                <a className="nav-item">Profile</a>
            </Menu.Item>
            <Menu.Item>
                <Input icon="search" placeholder="Search profiles..."/>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Button icon labelPosition="right" onClick={logout} primary>
                        Logout
                        <Icon name="sign-out" />
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};
