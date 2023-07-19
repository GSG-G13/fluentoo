import React, { ReactNode } from 'react';
import { Footer, Nav } from '../common';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: LayoutProps) {

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
      {currentPath !== '/auth' && currentPath !== '*'  && <Nav />}
      <main>{children}</main>
      {currentPath !== '/chat' && currentPath !== '/auth' &&  <Footer />}
    </div>
  );
}
export default AppLayout;
