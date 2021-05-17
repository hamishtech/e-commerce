import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
