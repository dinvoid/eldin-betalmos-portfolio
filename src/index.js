import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import './index.css';
import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";

const router = createBrowserRouter([{
        path: "/",
        element: < App / >
    }

]);

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render( <
    RouterProvider router = { router }
    />
);