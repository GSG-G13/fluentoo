import React, { ReactNode } from 'react';
import { Footer, Nav } from '../common';
import { useAuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: LayoutProps) {
  const { user ,setUser } = useAuthContext();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
      {currentPath !== '/auth' && currentPath !== '*'  && <Nav user={user} setUser={setUser} />}
      <main>{children}</main>
      {currentPath !== '/chat' && currentPath !== '/auth' &&  <Footer />}
    </div>
  );
}
export default AppLayout;
