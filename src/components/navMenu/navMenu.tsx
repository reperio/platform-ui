import React from 'react'
import {Nav, Navbar, NavItem} from "react-bootstrap";
const reperio = require('../../assets/reperio-logo.png');
import ApplicationsContainer from '../../containers/applications/applicationsContainer';
import ProfileInfoContainer from '../../containers/profileInfo/profileInfoContainer';
import ReperioBarContainer from '../../containers/misc/reperioBarContainer';
import { LinkContainer } from "react-router-bootstrap";

const NavMenu = (props: any) => (
    <div className="nav-menu-container">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="r-menu-header-icon" src={reperio}/>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav className="r-nav-links">
                {props.authSession.isAuthenticated ?
                    <LinkContainer to="/home">
                        <NavItem><i className="fa fa-home fa-lg"></i> Home</NavItem>
                    </LinkContainer>: null 
                }
                {!props.authSession.isAuthenticated ?
                    <LinkContainer to="/login">
                        <NavItem><i className="fa fa-sign-in fa-lg"></i> Login</NavItem>
                    </LinkContainer>: null 
                }
                {!props.authSession.isAuthenticated ?
                    <LinkContainer to="/signup">
                        <NavItem><i className="fa fa-user-plus fa-lg"></i> Signup</NavItem>
                    </LinkContainer>: null 
                }
            </Nav>
            <Nav pullRight>
                <ApplicationsContainer/>
                <ProfileInfoContainer/>
            </Nav>
        </Navbar>
        <ReperioBarContainer />
    </div>
);

export default NavMenu;