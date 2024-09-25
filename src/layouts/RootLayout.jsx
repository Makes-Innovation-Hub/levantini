import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";

const RootLayout = () => (
  <>
    <Header />
    <Toaster />
    <Outlet />
  </>
);

export default RootLayout;
