import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const storeProfileData = (data: any) => {
  localStorage.setItem('profileData', JSON.stringify(data || null));
};

const getStoredProfileData = () => {
  const storedData = localStorage.getItem('profileData');
  return storedData ? JSON.parse(storedData) : null;
};

const useProfile = () => {
  const { user } = useAuthContext();
  const [userId] = useState(user.userId);
  const storedProfileData = getStoredProfileData();
  const [profileData, setProfileData] = useState(storedProfileData);

  useEffect(() => {
    if (!profileData) {
      (async () => {
        const data = await fetchProfileData();
        setProfileData(data);
        storeProfileData(data);
      })()
    }
  }, [userId]);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`/api/profile/${userId}`);
      const profileData = response.data.data;
      return profileData;
    } catch (error) {
      console.error('Error fetching profile data:', error);
      throw error;
    }
  };

  return {
    profileData,
    setProfileData
  }
};
export default useProfile;
