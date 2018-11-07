import React from 'react'
import {Navbar, LinkContainer, NavItem} from '@reperio/ui-components'
import { NavDropdown } from 'react-bootstrap';
import { StateAuthSession } from '../../store/initialState';
import { CorePermissions } from '../../models/permission';

interface NavMenuProps {
    authSession: StateAuthSession;
}

const NavMenu = (props: NavMenuProps) => (
    <Navbar
        applicationName={"test"}
        authenticated={props.authSession.isAuthenticated}
        linkContainers={
            props.authSession.isAuthenticated ? [
                <LinkContainer key="1" exact to="/home">
                    <NavItem>
                        <i className="fa fa-home fa-lg"></i> Home
                    </NavItem>
                </LinkContainer>,
            props.authSession.user.permissions.includes(CorePermissions.ViewUsers)  ?
                <LinkContainer key="2" exact to="/users">
                    <NavItem>
                        <i className="fa fa-user fa-lg"></i> Users
                    </NavItem>
                </LinkContainer> : null,
            props.authSession.user.permissions.includes(CorePermissions.ViewRoles) ?
            <LinkContainer key="3" exact to="/roles">
                <NavItem>
                    <i className="fa fa-wheelchair-alt fa-lg"></i> Roles
                </NavItem>
            </LinkContainer> : null,
            props.authSession.user.permissions.includes(CorePermissions.ViewPermissions) || props.authSession.user.permissions.includes(CorePermissions.ViewOrganizations)?
                <NavDropdown pullRight key="6" title="Administration" id="admin-dropdown">
                    {props.authSession.user.permissions.includes(CorePermissions.ViewPermissions) ?
                        <LinkContainer key="7" exact to="/permissions">
                            <NavItem>
                                <i className="fa fa-shield fa-lg"></i> Permissions
                            </NavItem>
                        </LinkContainer> : null}
                    {props.authSession.user.permissions.includes(CorePermissions.ViewOrganizations) ?
                        <LinkContainer key="8" exact to="/organizations">
                            <NavItem>
                                <i className="fa fa-sitemap fa-lg"></i> Organizations
                            </NavItem>
                        </LinkContainer> : null}
                </NavDropdown> : null
        ] : [
            <LinkContainer key="5" to="/login">
                <NavItem>
                    <i className="fa fa-lock fa-lg"></i> Login
                </NavItem>
            </LinkContainer>,
            <LinkContainer key="4" exact to="/signup">
                <NavItem>
                    <i className="fa fa-home fa-lg"></i> Signup
                </NavItem> 
            </LinkContainer>
        ]}>
    </Navbar>
);

export default NavMenu;