import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoriesListPage } from './story';
import { NavBar } from './navigation'

const routes = [{
    path: '/',
    Component: StoriesListPage,
    exact: true
},];

export const Routes = () => (
    <Router>
        <NavBar></NavBar>
        <div className = "main pt-4">
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))}
        </Switch>
        </div>
    </Router>
)