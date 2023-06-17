import React from "react";
import { createContext, useContext } from "react";

import useAuth from "../hooks/useAuth";

import { AuthContextType, AuthProviderPropsType } from '../utils'

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<AuthProviderPropsType> = ({ children }) => {
  const value = useAuth() as AuthContextType;

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};