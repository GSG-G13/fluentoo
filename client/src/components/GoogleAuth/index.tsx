import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';
function GoogleAuth({ page }: any) {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  const signUpWithGoogle = async (token: any) => {
    const tokenCredential = token.credential;
    const sendToken = await axios.post('/api/google', { token: tokenCredential });
    navigate(page);
    setUser({
      userId: sendToken.data.data[0].id,
      userName: sendToken.data.data[0].username,
    });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <GoogleLogin
        shape='rectangular'
        context='signup'
        text='continue_with'
        onSuccess={signUpWithGoogle}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default GoogleAuth;
