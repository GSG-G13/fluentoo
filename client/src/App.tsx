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
import { Banner } from './components/Profile';
import { ProfileForm } from './components';
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
        element={user.userId ? profileData ? <Navigate to="/community" /> : (
          <div>
            <Banner />
            <div className='container-2'>
              <ProfileForm />
            </div>
          </div>
        ) : <Navigate to='/auth' />}
      />

      <Route
        path='/profile/update'
        element={user.userId ? profileData ? <ProfileInfo /> : <Navigate to="/profile/create" /> : <Navigate to='/auth' />}
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
