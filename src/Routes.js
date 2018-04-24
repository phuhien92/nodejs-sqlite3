import React from 'react';
import Home from './pages/home/Home';
import DashBoard from './pages/dashBoard';
import App from './App';
import EventTypes from './pages/eventTypes';
import Account from './pages/account';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path:'/',
                exact: true,
            },
            {
                path:'/admin/dashboard',
                ...DashBoard,
            },
            {
                ...EventTypes,
                path: '/admin/event_types'
            },
            {
                ...Account,
                path: '/admin/account'
            }
        ]
    }
]