import React from 'react'
import {Navbar, LinkContainer, NavItem} from '@reperio/ui-components'
import { NavDropdown } from 'react-bootstrap';
import { StateAuthSession } from '../../store/initialState';

interface NavMenuProps {
    authSession: StateAuthSession;
}

export const HomeLink = () => (
    <LinkContainer exact to="/home">
        <NavItem>
            <i className="fa fa-home fa-lg"></i> Home
        </NavItem>
    </LinkContainer>
);

export const UsersLink = () => (
    <LinkContainer exact to="/users">
        <NavItem>
            <i className="fa fa-user fa-lg"></i> Users
        </NavItem>
    </LinkContainer>
);

export const RolesLink = () => (
    <LinkContainer exact to="/roles">
        <NavItem>
            <i className="fa fa-wheelchair-alt fa-lg"></i> Roles
        </NavItem>
    </LinkContainer>
);

export const SignupLink = () => (
    <LinkContainer exact to="/signup">
        <NavItem>
            <i className="fa fa-home fa-lg"></i> Signup
        </NavItem>
    </LinkContainer>
);

export const LoginLink = () => (
    <LinkContainer to="/login">
        <NavItem>
            <i className="fa fa-lock fa-lg"></i> Login
        </NavItem>
    </LinkContainer>
);

export const PermissionsLink = () => (
    <LinkContainer exact to="/permissions">
        <NavItem>
            <i className="fa fa-shield fa-lg"></i> Permissions
        </NavItem>
    </LinkContainer>
);

export const OrganizationsLink = () => (
    <LinkContainer exact to="/organizations">
        <NavItem>
            <i className="fa fa-sitemap fa-lg"></i> Organizations
        </NavItem>
    </LinkContainer>
);

export const AdminDropdown = () => (
    <NavDropdown pullRight title="Administration" id="admin-dropdown">
        <PermissionsLink />
        <OrganizationsLink />
    </NavDropdown>
);

const NavMenu = (props: NavMenuProps) => (
    <Navbar
        applicationName={"test"}
        authenticated={props.authSession.isAuthenticated}>

        {props.authSession.isAuthenticated ? <HomeLink /> : null}
        {props.authSession.isAuthenticated ? <UsersLink /> : null}
        {props.authSession.isAuthenticated ? <RolesLink /> : null}
        {!props.authSession.isAuthenticated ? <SignupLink /> : null}
        {!props.authSession.isAuthenticated ? <LoginLink /> : null}
        {props.authSession.isAuthenticated ? <AdminDropdown /> : null}
    </Navbar>
);

export default NavMenu;