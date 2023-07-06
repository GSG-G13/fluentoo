import React from 'react';
import './App.css';
import { Signup, Login, Home, ProfilePage, ProfileInfo } from './pages';
import { useAuthContext } from './context/AuthContext';
import { Routes, Route, Navigate } from "react-router-dom";

import { Chat } from './pages';
function App() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
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

      <Route
        path="/profile/update"
        element={user.userId ? <ProfileInfo /> : <Navigate to="/signup" />}
      />
      
      <Route path="/profile/:profileId" element={<ProfilePage />} />

    </Routes>
  );
}

export default App;
