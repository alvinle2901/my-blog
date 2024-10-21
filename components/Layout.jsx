import React from 'react';
import { Header, NavBar, Footer } from './';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
