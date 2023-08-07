import React from "react";
import GlobalNavigation from "./GlobalNavigation";
const Layout = ({ children }) => {
  return (
    <>
      <GlobalNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
