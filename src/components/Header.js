import React, { useEffect, useState } from "react";
import NavMenuIcon from "./../img/menu-icon.png";
import YoutubeLogo from "./../img/youtubeLogo.png";
import NotificationIcon from "./../img/notification-icon.png";
import UserProfileIcon from "./../img/user-profile.png";
import CreateIcon from "./../img/create-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appConfigSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const suggestionsCache = useSelector((store) => store.search);
  const sideBarToggler = () => {
    dispatch(toggleSidebar());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(fetchfn, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchfn = async () => {
    if (suggestionsCache[searchQuery]) {
      setSearchSuggestions(suggestionsCache[searchQuery]);
    } else {
      console.log("fetched for ", searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(cacheSuggestions({ [searchQuery]: json[1] }));
    }
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
        <Link to="/">
          <img src={YoutubeLogo} alt="Nav Menu" className="w-40" />
        </Link>
      </div>
      <div className="col-span-10 flex justify-center items-center ">
        <div className="relative w-2/3 z-0">
          <input
            type="text"
            className="p-4 py-2 border border-gray-200 rounded-l-full outline-none w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          {searchSuggestions &&
            searchSuggestions.length > 0 &&
            showSuggestions && (
              <div className="absolute  bg-white w-full py-2 rounded-md shadow-2xl z-10">
                <ul>
                  {searchSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                    >
                      🔍 {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
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
