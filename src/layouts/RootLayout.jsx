import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RootLayout = () => (
  <>
    <Toaster />
    <Outlet />
  </>
);

export default RootLayout;
