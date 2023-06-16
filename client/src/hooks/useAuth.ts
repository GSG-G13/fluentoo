import axios from "axios";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      const { data } = await axios.get('/api/v1/auth/profile');
      if (data) {
        setUserId(data.data.id);
        setUserName(data.data.username);
        setIsAuthorized(true);
      }
    }

    getProfileData()
  }, [])

  return {
    userId,
    setUserId,
    userName,
    setUserName,
    isAuthorized,
    setIsAuthorized
  }
}

export default useAuth;