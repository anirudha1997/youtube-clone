import React from "react";
import NavMenuIcon from "./../img/menu-icon.png";
import YoutubeLogo from "./../img/youtubeLogo.png";
import NotificationIcon from "./../img/notification-icon.png";
import UserProfileIcon from "./../img/user-profile.png";
import CreateIcon from "./../img/create-icon.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();

  const sideBarToggler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="grid grid-flow-col py-3 shadow-md">
      <div className="col-span-1 flex items-center">
        <img
          src={NavMenuIcon}
          alt="Nav Menu"
          className="w-8 mx-4 cursor-pointer"
          onClick={sideBarToggler}
        />
        <img src={YoutubeLogo} alt="Nav Menu" className="w-40" />
      </div>
      <div className="col-span-10 justify-center flex items-center">
        <input
          type="text"
          className="p-4 py-2 w-2/3 border border-gray-200 rounded-l-full outline-none"
          placeholder="Search"
        />
        <button className="text-2xl p-4 py-1 border border-gray-200 border-l-0 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <img src={CreateIcon} alt="Nav Menu" />
        <img
          src={NotificationIcon}
          alt="Nav Menu"
          className="w-8 mx-4 cursor-pointer"
        />
        <img src={UserProfileIcon} alt="Nav Menu" className="mr-4" />
      </div>
    </div>
  );
};

export default Header;
