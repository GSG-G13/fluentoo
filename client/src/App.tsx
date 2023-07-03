import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Signup, Login, Home, ProfilePage } from './pages';
import { useAuthContext } from './context/AuthContext';
import { Chat } from './pages';
import EditProfile from './components/Profile/EditProfile';
function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

      <Route path="/profile/:profileId" element={<ProfilePage />} />

      <Route
        path="/edit"
        element={user.userId ? <EditProfile /> : <Navigate to="/signup" />}
      />
    </Routes>
  );
}

export default App;
