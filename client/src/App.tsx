import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Community, ProfileInfo, Auth } from './pages';
import { useAuthContext } from "./context/AuthContext";
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
        path="/chat"
        element={user.userId ? <Chat /> : <Navigate to="/auth" />}
      />
      <Route path='/community' element={<Community />} />
      <Route path='/Createprofile' element={<ProfileInfo />} />
      <Route path='/auth' element={user.userId ? <Navigate to="/community" /> : <Auth />} />

    </Routes>
  );
}

export default App;
