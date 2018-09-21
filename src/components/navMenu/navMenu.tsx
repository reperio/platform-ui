import React from 'react'
import {Navbar, LinkContainer, NavItem, ApplicationMenuItem} from '@reperio/ui-components'
import NavMenuLogOutLinkContainer from '../../containers/navMenuLogOutLinkContainer';
import NavMenuLoginLink from './navMenuLoginLink';

const NavMenu = (props: any) => (
    <Navbar
        authenticated={props.authSession.isAuthenticated}
        profile={props.authSession.user != null ? {
            initials: `${props.authSession.user.firstName.charAt(0).toUpperCase()}${props.authSession.user.lastName.charAt(0).toUpperCase()}`,
            name: `${props.authSession.user.firstName} ${props.authSession.user.lastName}`,
            accountName: 'Reper.io',
            phone: '1234567890',
            email:props.authSession.user.primaryEmail,
            onLogout: props.logout} : null}
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
            props.authSession.isAuthenticated ?
                <LinkContainer key="4" exact to="/permissions">
                    <NavItem>
                        <i className="fa fa-shield fa-lg"></i> Permissions
                    </NavItem>
                </LinkContainer> : null,
            !props.authSession.isAuthenticated ?
                <LinkContainer key="5" exact to="/signup">
                    <NavItem>
                        <i className="fa fa-home fa-lg"></i> Signup
                    </NavItem> 
                </LinkContainer> : null,
            props.authSession.isAuthenticated ?
            <LinkContainer key="6" exact to="">
                <NavMenuLogOutLinkContainer/>
            </LinkContainer> : 
            <LinkContainer key="7" exact to="">
                <NavMenuLoginLink/>
            </LinkContainer>,
        ]}
        applicationMenuItems={[
            <ApplicationMenuItem key="1" name="Example1" label="Example" />,
            <ApplicationMenuItem key="2" name="Exmaple2" label="Example 2" />,
            <ApplicationMenuItem key="3" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />,
            <ApplicationMenuItem key="4" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />,
            <ApplicationMenuItem key="5" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />
        ]}
        >
    </Navbar>
);

export default NavMenu;