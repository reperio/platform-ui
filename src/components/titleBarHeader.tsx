import React from 'react'
import { Switch } from "react-router-dom";
import PrivateRouteContainer from "../containers/privateRouteContainer";
import PublicRouteContainer from "../containers/publicRouteContainer";

const TitleBarHeader = () => (
    <Switch>
        <PrivateRouteContainer exact path="/home" component={() => <div>Home</div>} />
        <PrivateRouteContainer exact path="/users" component={() => <div>Users</div>} />
        <PrivateRouteContainer exact path="/users/new" component={() => <div>Create User</div>} />
        <PrivateRouteContainer exact path="/users/:userId/edit" component={() => <div>Manage User</div>} />
        <PrivateRouteContainer exact path="/roles" component={() => <div>Roles</div>} />
        <PrivateRouteContainer exact path="/roles/:roleId/edit" component={() => <div>Manage Role</div>} />
        <PrivateRouteContainer exact path="/roles/new" component={() => <div>Create Role</div>} />
        <PrivateRouteContainer exact path="/permissions" component={() => <div>Permissions</div>} />
        <PrivateRouteContainer exact path="/permissions/:permissionName/edit" component={() => <div>Manage Permission</div>} />
        <PrivateRouteContainer exact path="/organizations" component={() => <div>Organizations</div>} />
        <PrivateRouteContainer exact path="/organizations/:organizationId/edit" component={() => <div>Manage Organization</div>} />
        <PrivateRouteContainer exact path="/organizations/new" component={() => <div>Create Organization</div>} />
        <PublicRouteContainer exact path="/login" component={() => <div>Login</div>} />
        <PublicRouteContainer exact path="/signup" component={() => <div>Signup</div>} />
        <PublicRouteContainer exact path="/emailVerification/:token" component={() => <div>Email Verification</div>} />
        <PublicRouteContainer exact path="/forgotPassword" component={() => <div>Forgot Password</div>} />
        <PublicRouteContainer exact path="/resetPassword/:token" component={() => <div>Reset Password</div>} />
        <PublicRouteContainer exact path="/error" component={() => <div>Error</div>} />
    </Switch>
);

export {TitleBarHeader};