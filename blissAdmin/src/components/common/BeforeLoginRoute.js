import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const BeforeLoginRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem("blissAdminToken") ?
            <Redirect to="/" />
            : 
            <Component {...props} />
        )} />
    );
};

export default BeforeLoginRoute;