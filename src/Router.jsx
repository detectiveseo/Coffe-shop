import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Account/LoginPage/Login';
import Registration from './Components/Pages/Account/RegistrationPage/Registration';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            }
        ]
    }
])

export default Router;