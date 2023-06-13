import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Signup } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello landing</div>,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
