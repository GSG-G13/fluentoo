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
  user: { userId: number | null; userName: string | null };
  setUser: (user: {} | null) => void;
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
  isOnline: boolean;
  selectedUser: UserObjectType;
  setSelectedUser: (selectedUser: UserObjectType) => void;
}

export interface SiderCollapsedPropsType {
  collapsed: boolean;
  allContacts?: UserObjectType[];
  setFilterdContacts?: (filterdContacts: UserObjectType[]) => void;
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
  languages: string[];
  selectMode?: 'multiple' | 'tags';
  name: string;
  setLanguage: (language: string) => void;
}

export interface ProfileCredentials {
  gender: string
  country: string
  birthDate: string
  interests?: string | null
  bio?: string
  avatar?: string | null | undefined
  practiceLanguages: string
  spokenLanguages: string
}

export interface quizLevelType {
  count: number;
  text: string;
  color: string;
}

export interface quizQuestionsType {
  count: number;
  text: string;
  color: string;
}

export interface QuestionType {
  question: string;
  options: string[];
  correct_answer: string;
}

export interface QuizType {
  quiz_id: number;
  questions: QuestionType[];
}

export interface UploadImageProps {
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
}
