import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Profile from "./profile";
import Settings from "./Settings";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
