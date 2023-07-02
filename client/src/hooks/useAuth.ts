import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { LoggedUserObjectType, DecodeJwtType } from '../utils'


const useAuth = () => {
  const [user, setUser] = useState<LoggedUserObjectType>({
    userId: null,
    userName: null,
  });

  useEffect(() => {
    const token: string | undefined = Cookies.get('token');
    if (token) {
      var decode: DecodeJwtType = jwt_decode(token);
      if (decode) {
        setUser({
          userId: decode.id,
          userName: decode.username,
        });
      }
    }
  }, [])

  return {
    user,
    setUser,
  }
}

export default useAuth;