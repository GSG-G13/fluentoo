import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';
function GoogleAuth() {
  const { setUser } = useAuthContext();
  const signUpWithGoogle = async (token: any) => {
    const tokenn = token.credential
    const sendToken = await axios.post("/api/v1/auth/google", { token: tokenn });
    setUser({
      userId: sendToken.data.data[0].id,
      userName: sendToken.data.data[0].username,
    })
  }
  return (
    <div style={{ display: 'flex' ,justifyContent:'center' }}>
      <GoogleLogin
        shape='pill'
        context='signup'
        text='continue_with'
        onSuccess={signUpWithGoogle}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  )
}

export default GoogleAuth
