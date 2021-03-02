import React from 'react';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import App from "./Components/App";
import NotFoundPage from "./Components/NotFoundPage";
import Admin_Page from "./Components/Admins/Admin_Page";


export default [
    {
        ...App,
        routes: [
            {
                ...Login,
              path: '/',
              exact:true

            },
            {
                ...SignUp,
                path: '/signup'
            },
            {
                ...Admin_Page,
                path: '/admins'
            },

            {
                ...NotFoundPage
            }
        ]
    }
]
