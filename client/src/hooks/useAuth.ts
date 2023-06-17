import axios from "axios";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState({
    userId: null,
    userName: null,
  });

  useEffect(() => {
    const getProfileData = async () => {
      const { data: userData } = await axios.get('/api/v1/auth/profile');
      if (userData) {
        setUser({
          userId: userData.data.id,
          userName: userData.data.username,
        });
      }
    }

    getProfileData()
  }, [])

  return {
    user,
    setUser,
  }
}

export default useAuth;