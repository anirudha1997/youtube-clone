import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Header />
      <div className="w-screen flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
