import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx"; // Ensure the path to your Navbar component is correct

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
