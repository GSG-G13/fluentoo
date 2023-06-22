import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Signup, Login } from './pages';
import { useAuthContext } from "./context/AuthContext";
import { Chat } from './pages';
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
        element={user.userId ? <Navigate to="/chat" /> : <Signup />}
      />
      <Route
        path="/login"
        element={user.userId ? <Navigate to="/chat" /> : <Login />}
      />
      <Route
        path="/chat"
        element={user.userId ? <Chat /> : <Navigate to="/signup" />}
      />
    </Routes>
  );
}

export default App;
