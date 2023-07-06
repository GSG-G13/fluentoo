import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AuthProvider from "./context/AuthContext";
import ProfileProvider from './context/ProfileContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
    <ProfileProvider>
    <GoogleOAuthProvider clientId="120111886097-er99p69quna208pvuupimkjm073pb996.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </ProfileProvider>
      
      
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>,
);
