import React from 'react';
import Home from './pages/home/Home';
import DashBoard from './pages/dashboard/DashBoard';
import App from './App';
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
                component: DashBoard,
            }
        ]
    }
]