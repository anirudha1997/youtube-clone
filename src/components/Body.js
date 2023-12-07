import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fixSideBar } from "../utils/appConfigSlice";

const Body = () => {
  const dispatch = useDispatch();
  const sideBarOpen = useSelector((store) => store.appConfig.sidebarVisible);
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
    const body = document.body;
    if (window.outerWidth <= 1024 && sideBarOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [sideBarOpen, dispatch]);
  return (
    <>
      <Header />
      <div className="w-full flex pt-[65px] relative">
        <Sidebar />
        <Outlet />
        {sideBarOpen && (
          <div className="block lg:hidden absolute z-10 top-0 left-0 w-full h-full bg-black opacity-50"></div>
        )}
      </div>
    </>
  );
};

export default Body;
