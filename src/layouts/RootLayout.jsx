import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => (
  <>
  <Navbar/>
    <Toaster />
    <Outlet />
  </>
);

export default RootLayout;
