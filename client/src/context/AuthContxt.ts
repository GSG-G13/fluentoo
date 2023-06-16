import React from "react";
import { createContext, useContext, ReactNode } from "react";

import useAuth from "../hooks/useAuth";

interface AuthContextType {
  token: string | null,
  setToken: (token: string | null) => void,
  isAuthorized: boolean,
  setIsAuthorized: (isAuthorized: boolean) => void,
  userName: string | null,
  setUserName: (userName: string | null) => void,
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const value = useAuth() as AuthContextType;

  return <AuthContext.Provider value={ value }> { children } < /AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};