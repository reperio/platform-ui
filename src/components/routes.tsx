import React from 'react'

import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router";
import LoginFormContainer from "../containers/auth/loginFormContainer";
import PrivateRouteContainer from "../containers/privateRouteContainer";
import PublicRouteContainer from "../containers/publicRouteContainer";
import MainDashboardContainer from "../containers/mainDashboardContainer";
import SignupFormContainer from '../containers/auth/signupFormContainer';
import UsersContainer from '../containers/users/usersContainer';
import UserCreateFormContainer from '../containers/users/userCreateFormContainer';
import UserManagementFormContainer from '../containers/users/userManagementFormContainer';
import PermissionManagementContainer from "../containers/permissions/permissionManagementContainer";
import PermissionsContainer from "../containers/permissions/permissionsContainer";
import RoleManagementContainer from "../containers/roles/roleManagementContainer";
import RolesContainer from "../containers/roles/rolesContainer";
import RoleCreateFormContainer from "../containers/roles/roleCreateFormContainer";
import EmailVerificationContainer from "../containers/auth/emailVerificationContainer";
import OrganizationsContainer from "../containers/organizations/organizationsContainer";
import OrganizationManagementContainer from "../containers/organizations/organizationManagementContainer";
import OrganizationCreateFormContainer from "../containers/organizations/organizationCreateFormContainer";
import ForgotPasswordFormContainer from "../containers/auth/forgotPasswordFormContainer";
import ResetPasswordFormContainer from "../containers/auth/resetPasswordFormContainer";
import ErrorContainer from '../containers/errorContainer';
import { CorePermissions } from '../models/permission';

const Routes = () => (
    <div className="app-content">
        <Switch>
            <PrivateRouteContainer exact path="/home" component={MainDashboardContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewUsers]} exact path="/users" component={UsersContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewUsers, CorePermissions.CreateUsers]} exact path="/users/new" component={UserCreateFormContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewUsers]} exact path="/users/:userId/edit" component={UserManagementFormContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewRoles]} exact path="/roles" component={RolesContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewRoles]} exact path="/roles/:roleId/edit" component={RoleManagementContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewRoles, CorePermissions.CreateRoles]} exact path="/roles/new" component={RoleCreateFormContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewPermissions]} exact path="/permissions" component={PermissionsContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewPermissions]} exact path="/permissions/:permissionName/edit" component={PermissionManagementContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewOrganizations]} exact path="/organizations" component={OrganizationsContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewOrganizations]} exact path="/organizations/:organizationId/edit" component={OrganizationManagementContainer} />
            <PrivateRouteContainer requiredPermissions={[CorePermissions.ViewOrganizations, CorePermissions.CreateOrganizations]} exact path="/organizations/new" component={OrganizationCreateFormContainer} />
            <PublicRouteContainer exact path="/login" component={LoginFormContainer} />
            <PublicRouteContainer exact path="/signup" component={SignupFormContainer} />
            <PublicRouteContainer exact path="/emailVerification/:token" component={EmailVerificationContainer} />
            <PublicRouteContainer exact path="/forgotPassword" component={ForgotPasswordFormContainer} />
            <PublicRouteContainer exact path="/resetPassword/:token" component={ResetPasswordFormContainer} />
            <PublicRouteContainer exact path="/error" component={ErrorContainer} />
            <Route>
                <Redirect to="/home"/>
            </Route>
        </Switch>
    </div>
);

export default Routes;