import React from "react";
import Navbar from "../../src/features/authentication/components/NavBar/NavBar"; // Ensure the path to your Navbar component is correct

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
