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
            email:props.authSession.user.primaryEmail} : null}
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
            !props.authSession.isAuthenticated ?
                <LinkContainer key="3" exact to="/signup">
                    <NavItem>
                        <i className="fa fa-home fa-lg"></i> Signup
                    </NavItem> 
                </LinkContainer> : null,
            props.authSession.isAuthenticated ?
            <LinkContainer key="4" exact to="">
                <NavMenuLogOutLinkContainer/>
            </LinkContainer> : 
            <LinkContainer key="5" exact to="">
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
    // <div className="app-sidebar">
    //     <div className="nav-side-menu">
    //         <div className="brand">Brand Logo</div>
    //         <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        
    //             <div className="menu-list">
        
    //                 <ul id="menu-content" className="menu-content collapse out">
    //                 {props.authSession.isAuthenticated ?  
    //                     <li>
    //                         <NavLink exact className="app-navlink" to="/home">
    //                             <i className="fa fa-home fa-lg"></i> Home
    //                         </NavLink>
    //                     </li> : null 
    //                 }

    //                 {props.authSession.isAuthenticated ?  
    //                     <li>
    //                         <NavLink exact className="app-navlink" to="/users">
    //                             <i className="fa fa-user fa-lg"></i> Users
    //                         </NavLink>
    //                     </li> : null 
    //                 }

    //                 {!props.authSession.isAuthenticated ?  
    //                     <li>
    //                         <NavLink exact className="app-navlink" to="/signup">
    //                             <i className="fa fa-home fa-lg"></i> Sign Up
    //                         </NavLink>
    //                     </li> : null 
    //                 }    

    //                     {props.authSession.isAuthenticated ? <NavMenuLogOutLinkContainer/> : <NavMenuLoginLink/>}                      
                        
    //                 </ul>
    //         </div>
    //     </div>
    // </div>
    // // <div>
    // //     {props.authSession.isAuthenticated ? <LinkContainer to="/home"><NavItem>Home</NavItem></LinkContainer> : null}
    // //     {props.authSession.isAuthenticated ? <NavMenuLogOutLinkContainer/> : <NavMenuLoginLink/>}
    // // </div>
);

export default NavMenu;