import React from 'react';
import './App.css';
import { Community, Auth, NotFound, Home, ProfilePage, ProfileInfo } from './pages';
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
        path="/chat"
        element={user.userId ? <Chat /> : <Navigate to="/auth" />}
      />

      <Route
        path="/profile/update"
        element={user.userId ? <ProfileInfo /> : <Navigate to="/signup" />}
      />
      
      <Route path="/profile/:profileId" element={<ProfilePage />} />
      <Route path='/community' element={<Community />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/Createprofile' element={<ProfileInfo />} />
      <Route path='/auth' element={user.userId ? <Navigate to="/community" /> : <Auth />} />

    </Routes>
  );
}

export default App;
