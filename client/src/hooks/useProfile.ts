import {  useState, useEffect } from 'react';
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
  const id =user.userId;
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const storedProfileData = getStoredProfileData();
    if (storedProfileData) {
      setProfileData(storedProfileData);
    } else if (id) {
      const profileData = async () => {
        const data = await fetchProfileData();
        setProfileData(data);
        storeProfileData(data);
      };
      profileData();
    }
  }, [id]);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`/api/profile/${id}`); 
      const profileData = response.data.data;
      return profileData;
    } catch (error) {
      console.error('Error fetching profile data:', error);
      throw error;
    }
  };

return{
  profileData
}
};
export default useProfile;
