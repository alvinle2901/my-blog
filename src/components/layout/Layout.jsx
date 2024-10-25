import React from 'react';

import { Footer } from './footer';
import { NavBar } from './nav_bar';

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
