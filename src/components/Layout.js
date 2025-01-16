import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  // console.log(children);
  return (
    <main>
      {/* <Nav /> */}
      {children ? <div className="content">{children}</div> : <></>}
    </main>
  );
};

export default Layout;
