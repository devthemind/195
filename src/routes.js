import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import Home from './layouts/Home/Home';

const routes = [
    {
        route: '*',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                component: lazy(() => import('./views/home/Intro'))
            }
        ]
    }
]

export default routes;