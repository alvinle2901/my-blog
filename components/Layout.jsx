import React from 'react';
import { Header, NavBar } from './';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* <Header /> */}
      {children}
    </>
  );
};

export default Layout;
