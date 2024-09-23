import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import LogoHeader from "../components/ui/LogoHeader/LogoHeader";

const RootLayout = () => (
  <>
    <LogoHeader />
    <Header />
    <Toaster />
    <Outlet />
  </>
);

export default RootLayout;
