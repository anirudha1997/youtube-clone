import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fixSideBar } from "../utils/appConfigSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollHandler = () => {
      if (
        window.scrollY >=
        parseInt(
          window.getComputedStyle(document.getElementById("header")).height
        )
      )
        dispatch(fixSideBar(true));
      else dispatch(fixSideBar(false));
    };
    window.addEventListener("scroll", scrollHandler);
  }, []);
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
