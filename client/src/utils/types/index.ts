import { ReactNode } from "react";

export interface SignupCredentials {
  email: string;
  username: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: { userId: number | null; userName: string | null; }
  setUser: (user: {} | null) => void,
}

export interface AuthProviderPropsType {
  children: ReactNode;
}