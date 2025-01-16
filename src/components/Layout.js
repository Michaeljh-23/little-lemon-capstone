import React from "react";

const Layout = ({ children }) => {
  //TODO loading
  return (
    <main>{children ? <div className="content">{children}</div> : <></>}</main>
  );
};

export default Layout;
