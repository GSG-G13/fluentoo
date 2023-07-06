import React from "react";
import { createContext, useContext } from "react";
import { AuthProviderPropsType } from '../utils'
import useProfile from "../hooks/useProfile";

const ProfileContext = createContext(null);
const ProfileProvider: React.FC<AuthProviderPropsType> = ({ children }: any) => {
    const value: any = useProfile();
    return <ProfileContext.Provider value={value}> {children} </ProfileContext.Provider>;
};


export default ProfileProvider;

export const useProfileContext = () => {
    const profileData = useContext(ProfileContext);
    if (!profileData) {
        throw new Error('useProfileContext must be used within a ProfileProvider');
    }
    return profileData;
};

