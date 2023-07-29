import React from 'react';
import './App.css';
import {
  Community,
  Auth,
  NotFound,
  Home,
  ProfilePage,
  ProfileInfo,
  Quizzes,
} from './pages';
import { useAuthContext } from './context/AuthContext';
import { useProfileContext } from './context/ProfileContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Chat } from './pages';

function App() {
  const { user } = useAuthContext();
  const { profileData } = useProfileContext();
  
  return (
    <Routes>

      <Route path='/' element={<Home />} />

      <Route
        path='/community'
        element={<Community />}
      />

      <Route
        path='/chat'
        element={user.userId ? profileData ? <Chat /> : <Navigate to="/profile/create" /> : <Navigate to='/auth' />}
      />

      <Route
        path="/quizzes"
        element={user.userId ? profileData ? <Quizzes /> : <Navigate to="/profile/create" /> : <Navigate to='/auth' />}
      />

      <Route
        path='/profile/create'
        element={user.userId ? profileData ? <Navigate to="/community" /> : <ProfileInfo mode='create' /> : <Navigate to='/auth' />}
      />

      <Route
        path='/profile/update'
        element={user.userId ? profileData ? <ProfileInfo mode='update' /> : <Navigate to="/profile/create" /> : <Navigate to='/auth' />}
      />

      <Route
        path='/profile/:profileId'
        element={user.userId ? <ProfilePage /> : <Navigate to='/auth' />}
      />

      <Route
        path='/auth'
        element={user.userId ? <Navigate to='/community' /> : <Auth />}
      />

      <Route path='*' element={<NotFound />} />

    </Routes>
  );
}

export default App;
