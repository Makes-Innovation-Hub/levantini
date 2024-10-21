import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import Menu from "../components/menu/Menu"; 
import { motion } from "framer-motion";

const layoutVariants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const RootLayout = () => (
  <motion.div
    variants={layoutVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    transition={{ duration: 1 }}
  >
    <Header />
   
    <Toaster />
    <Outlet />
  </motion.div>
);

export default RootLayout;



