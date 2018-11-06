import React from 'react'
import {Navbar, LinkContainer, NavItem} from '@reperio/ui-components'
import { NavDropdown } from 'react-bootstrap';
import { StateAuthSession } from '../../store/initialState';

interface NavMenuProps {
    authSession: StateAuthSession;
}

const NavMenu = (props: NavMenuProps) => (
    <Navbar
        applicationName={"test"}
        authenticated={props.authSession.isAuthenticated}
        linkContainers={[
            props.authSession.isAuthenticated ?
                <LinkContainer key="1" exact to="/home">
                    <NavItem>
                        <i className="fa fa-home fa-lg"></i> Home
                    </NavItem>
                </LinkContainer> : null,
            props.authSession.isAuthenticated ?
                <LinkContainer key="2" exact to="/users">
                    <NavItem>
                        <i className="fa fa-user fa-lg"></i> Users
                    </NavItem>
                </LinkContainer> : null,
            props.authSession.isAuthenticated ?
            <LinkContainer key="3" exact to="/roles">
                <NavItem>
                    <i className="fa fa-wheelchair-alt fa-lg"></i> Roles
                </NavItem>
            </LinkContainer> : null,
            !props.authSession.isAuthenticated ?
                <LinkContainer key="4" exact to="/signup">
                    <NavItem>
                        <i className="fa fa-home fa-lg"></i> Signup
                    </NavItem> 
                </LinkContainer> : null,
            !props.authSession.isAuthenticated ?
            <LinkContainer key="5" to="/login">
                <NavItem>
                    <i className="fa fa-lock fa-lg"></i> Login
                </NavItem>
            </LinkContainer> : null,
            props.authSession.isAuthenticated ?
                <NavDropdown pullRight key="6" title="Administration" id="admin-dropdown">
                    {props.authSession.isAuthenticated ?
                        <LinkContainer key="7" exact to="/permissions">
                            <NavItem>
                                <i className="fa fa-shield fa-lg"></i> Permissions
                            </NavItem>
                        </LinkContainer> : null}
                    {props.authSession.isAuthenticated ?
                        <LinkContainer key="8" exact to="/organizations">
                            <NavItem>
                                <i className="fa fa-sitemap fa-lg"></i> Organizations
                            </NavItem>
                        </LinkContainer> : null}
                </NavDropdown> : null
        ]}>
    </Navbar>
);

export default NavMenu;