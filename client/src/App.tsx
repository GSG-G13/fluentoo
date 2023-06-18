import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Signup } from './pages';
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
        element={user.userId ? <Navigate to="/dashboard" /> : <Signup />}
      />
      <Route
        path="/dashboard"
        element={user.userId ? <div>dashbord sec</div> : <Navigate to="/signup" />}
      />
       <Route
        path="/chat"
        element={user.userId ? <Chat/> :<Signup/>}
      />
    </Routes>
  );
}

export default App;
