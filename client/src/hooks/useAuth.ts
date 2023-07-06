import { useState } from 'react';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { LoggedUserObjectType, DecodeJwtType } from '../utils'


const useAuth = () => {
  const token: string | undefined = Cookies.get('token');
  let logedInUser: DecodeJwtType = {};
  if (token) {
    logedInUser = jwt_decode(token)
  }
  const [user, setUser] = useState<LoggedUserObjectType>({
    userId: logedInUser?.id,
    userName: logedInUser?.username,
  });

  return {
    user,
    setUser,
  }
}

export default useAuth;