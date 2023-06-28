
import type { MenuProps } from 'antd';
// tochange later /get languages endpoint 
const languages = [
  'English',
  'Spanish',
  'French',
  'German',
];

const menuItems: MenuProps['items'] = languages.map((language) => ({
  label: language,
  key: language,
  icon:' ll'
}));

  export default menuItems;