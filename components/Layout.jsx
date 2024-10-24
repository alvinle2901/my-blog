import React from 'react';

import { Footer, Header, NavBar } from './';

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
