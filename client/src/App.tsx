import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Signup } from './pages';
import Community from './pages/Community';
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello landing</div>,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path:'/community',
    element:<Community/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
