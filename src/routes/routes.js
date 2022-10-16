import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginBootstrap from '../components/LoginBootstrap';
import RegisterReactBootstrap from '../components/RegisterReactBootstrap';
import Main from '../layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <RegisterReactBootstrap></RegisterReactBootstrap>
            },
            {
                path: '/register',
                element: <RegisterReactBootstrap></RegisterReactBootstrap>
            },
            {
                path: '/login',
                element: <LoginBootstrap></LoginBootstrap>
            }
        ]
    }
]);