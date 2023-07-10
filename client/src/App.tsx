import React from 'react';
import './App.css';
import {
  Community,
  Auth,
  NotFound,
  Home,
  ProfilePage,
  ProfileInfo,
} from './pages';
import { useAuthContext } from './context/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Chat } from './pages';
import { Banner } from './components/Profile';
import { ProfileForm } from './components';
function App() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/chat'
        element={user.userId ? <Chat /> : <Navigate to='/auth' />}
      />

      <Route
        path='/profile/update'
        element={user.userId ? <ProfileInfo /> : <Navigate to='/auth' />}
      />

      <Route
        path='/profile/create'
        element={
          <div>
            <Banner />
            <div className='container-2'>
              <ProfileForm />
            </div>
          </div>
        }
      />
      <Route path='/profile/:profileId' element={<ProfilePage />} />
      <Route path='/community' element={<Community />} />
      <Route
        path='/auth'
        element={user.userId ? <Navigate to='/community' /> : <Auth />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
