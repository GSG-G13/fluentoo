import { ReactNode } from 'react';

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

export interface UserObjectType {
  userId: number;
  userName: string;
}

export interface MessageObjectType {
  content: string;
  sender: number;
  receiver: number;
  isOur: boolean;
}

export interface UserComponentPropsType {
  user: UserObjectType;
  selectedUser: UserObjectType;
  setSelectedUser: (selectedUser: UserObjectType) => void;
}

export interface SiderCollapsedPropsType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export interface ChatUserHeadPropsType extends SiderCollapsedPropsType {
  selectedUser: UserObjectType;
}

export interface SendMessageFormPropsType {
  text: string;
  setText: (text: string) => void;
  handleSendMessage: () => void;
}

export interface DecodeJwtType {
  id?: number;
  username?: string;
  email?: string;
  iat?: number;
}

export interface LoggedUserObjectType {
  userId: number | undefined;
  userName: string | undefined;
}
export interface DropMenuProps {
  name: string;
  setLanguage: (language: string) => void;
}

