import {  useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const storeProfileData = (data:any) => {
  localStorage.setItem('profileData', JSON.stringify(data));
};

const getStoredProfileData = () => {
  const storedData = localStorage.getItem('profileData');
  return storedData ? JSON.parse(storedData) : null;
};

 const useProfile = () => {
  const { user } = useAuthContext();
  const id =user.userId;
  if(!user) return;
  const [profileData, setProfileData] = useState(null);


  useEffect(() => {
    const storedProfileData = getStoredProfileData();
    if (storedProfileData) {
      setProfileData(storedProfileData);
    } else {
    const profileData=async()=>{
     const data= await fetchProfileData();
     setProfileData(data)
     storeProfileData(data)
    } 
    profileData();
    }
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`/api/v1/profile/${id}`); 
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