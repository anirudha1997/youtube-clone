import React from "react";
import NavList from "./NavList";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarVisibility = useSelector(
    (store) => store.appConfig.sidebarVisible
  );

  let sideBarDynamicStyle = "";
  if (!sidebarVisibility) sideBarDynamicStyle = "w-[0%] pl-0 ";
  else sideBarDynamicStyle = "w-[50%] md:w-[40%] lg:w-[20%] pl-4 ";

  return (
    <div
      className={
        "absolute lg:fixed z-30 top-[66px] h-screen py-2 overflow-y-auto bg-slate-100 transition-width duration-150 ease-in-out " +
        sideBarDynamicStyle
      }
      id="sideBar"
    >
      <NavList />
      <NavList />
      <NavList />
    </div>
  );
};

export default Sidebar;
