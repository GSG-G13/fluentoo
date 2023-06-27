export interface SignupCredentials {
  email: string;
  userName: string;
  password: string;
}
export interface DropMenuProps {
  name: string;
  setLanguage: (language: string) => void;
}