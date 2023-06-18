import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Signup, Login } from './pages';
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route
        path="/"
        element={<div>Hi landing</div>}
      />
      <Route
        path="/signup"
        element={user.userId ? <Navigate to="/dashboard" /> : <Signup />}
      />
      <Route
        path="/login"
        element={user.userId ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard"
        element={user.userId ? <div>dashbord sec</div> : <Navigate to="/signup" />}
      />
    </Routes>
  );
}

export default App;
