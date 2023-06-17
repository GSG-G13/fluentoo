import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Signup, LandingPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/ >,
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
