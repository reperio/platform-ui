import React from 'react'

import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router";
import LoginFormContainer from "../containers/loginFormContainer";
import PrivateRouteContainer from "../containers/privateRouteContainer";
import PublicRouteContainer from "../containers/publicRouteContainer";
import MainDashboardContainer from "../containers/mainDashboardContainer";
import SignupFormContainer from '../containers/signupFormContainer';
import usersContainer from '../containers/usersContainer';
import userCreateFormContainer from '../containers/userCreateFormContainer';
import userManagementFormContainer from '../containers/userManagementFormContainer';
import permissionManagementContainer from "../containers/permissions/permissionManagementContainer";
import permissionEditorFormContainer from "../containers/permissions/permissionEditorFormContainer";

const Routes = () => (
    <div className="app-content">
        <Switch>
            <PrivateRouteContainer exact path="/home" component={MainDashboardContainer} />
            <PrivateRouteContainer exact path="/users" component={usersContainer} />
            <PrivateRouteContainer exact path="/users/new" component={userCreateFormContainer} />
            <PrivateRouteContainer exact path="/users/:userId/edit" component={userManagementFormContainer} />
            <PrivateRouteContainer exact path="/userCreate" component={userCreateFormContainer} />
            <PrivateRouteContainer exact path="/userManagement" component={userManagementFormContainer} />
            <PrivateRouteContainer exact path="/permissions" component={permissionManagementContainer} />
            <PrivateRouteContainer exact path="/permissions/new" component={permissionEditorFormContainer} />
            <PrivateRouteContainer exact path="/permissions/:permissionId/edit" component={permissionEditorFormContainer} />
            <PublicRouteContainer exact path="/login" component={LoginFormContainer} />
            <PublicRouteContainer exact path="/signup" component={SignupFormContainer} />
            <Route>
                <Redirect to="/home"/>
            </Route>
        </Switch>
    </div>
);

export default Routes;