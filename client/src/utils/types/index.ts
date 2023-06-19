import { ReactNode } from "react";

export interface SignupCredentials {
  email: string;
  username: string;
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
  text: string;
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
