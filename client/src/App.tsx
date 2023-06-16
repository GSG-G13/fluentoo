import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Signup } from './pages';
import { useAuthContext } from "./context/AuthContext";

function App() {

  const { isAuthorized } = useAuthContext();

  return (
    <Routes>
      <Route
        path="/"
        element={<div>Hi landing</div>}
      />
      <Route
        path="/signup"
        element={isAuthorized ? <Navigate to="/dashboard" /> : <Signup />}
      />
      <Route
        path="/dashboard"
        element={isAuthorized ? <div>dashbord sec</div> : <Navigate to="/signup" />}
      />
    </Routes>
  );
}

export default App;
