import React from "react";
import AdsSidebar from "../AdsSidebar/AdsSidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      
      <div className="layout-content">
        {children}
      </div>

      <div className="layout-sidebar">
        <AdsSidebar />
      </div>

    </div>
  );
};

export default Layout;