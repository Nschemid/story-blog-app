import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage, PrivateRoute } from './auth';
import {
    StoriesListPage,
    addStoryPage
} from './story';
import { NavBar } from './navigation';

const routes = [{
    path: '/',
    Component: StoriesListPage,
    exact: true
}, {
    path: '/sign-in',
    Component: SignInPage,
    exact: true
},

{
    path: '/add-story',
    Component: addStoryPage,
    exact: true,
    private: true
},


];

export const Routes = ({ isLoading, user }) => {
    return (
        <Router>
            <NavBar user={user} />
            <Switch>
            {routes.map((route, index) => {
                const RouteType = route.private
                    ? PrivateRoute
                    : Route;
                return (
                    <RouteType
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                    >
                        <route.Component />
                    </RouteType>
                );
            })}
            </Switch>
        </Router>
    );
}