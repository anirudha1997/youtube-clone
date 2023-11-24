import React, { useEffect, useState, useCallback } from "react";
import NavMenuIcon from "./../img/menu-icon.png";
import YoutubeLogo from "./../img/youtubeLogo.png";
import YoutubeMobileLogo from "./../img/youtube-mobile-icon.png";
import NotificationIcon from "./../img/notification-icon.png";
import UserProfileIcon from "./../img/user-profile.png";
import CreateIcon from "./../img/create-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appConfigSlice";
import { Link } from "react-router-dom";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SUGGESTIONS_API,
} from "../utils/constants";
import {
  addSearchResults,
  cacheSuggestions,
  clearSearchResults,
  setSearchQuery,
} from "../utils/searchSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const suggestionsCache = useSelector((store) => store.search);
  const sideBarToggler = () => {
    dispatch(toggleSidebar());
  };

  const searchQuery = useSelector((store) => store.search.searchQuery);
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const fetchfn = useCallback(async () => {
    if (searchQuery !== "") {
      if (suggestionsCache[searchQuery]) {
        setSearchSuggestions(suggestionsCache[searchQuery]);
      } else {
        const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(cacheSuggestions({ [searchQuery]: json[1] }));
      }
    }
  }, [dispatch, searchQuery, suggestionsCache]);

  useEffect(() => {
    const timer = setTimeout(fetchfn, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, fetchfn]);

  const triggerSearch = async () => {
    dispatch(clearSearchResults());
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("Results:", json?.items);
    dispatch(
      addSearchResults({
        items: json?.items,
        nextPageToken: json.nextPageToken,
      })
    );
    navigate("/results?search_query=" + searchQuery);
  };

  return (
    <div
      className="grid grid-cols-4 md:grid-cols-12 py-3 shadow-md fixed w-full bg-white z-50"
      id="header"
    >
      <div className="col-span-1 md:col-span-2 flex items-center">
        <img
          src={NavMenuIcon}
          alt="Nav Menu"
          className="w-[1.5rem] md:w-8 mx-2 md:mx-4 cursor-pointer"
          onClick={sideBarToggler}
        />
        <Link to="/">
          <picture>
            <source media="(max-width: 1023px)" srcSet={YoutubeMobileLogo} />
            <source media="(min-width: 1024px)" srcSet={YoutubeLogo} />
            <img
              src={YoutubeLogo}
              alt="Nav Menu"
              className="max-w-[3rem] lg:max-w-[10rem] mr-4"
            />
          </picture>
        </Link>
      </div>
      <div className="col-span-2 md:col-span-8 flex justify-center items-center ">
        <div className="relative w-full md:w-2/3 z-0">
          <input
            type="text"
            className="p-4 py-2 border border-gray-200 rounded-l-full outline-none w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              dispatch(setSearchQuery(e.target.value));
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestions(false);
              }, 300);
            }}
          />
          {searchSuggestions &&
            searchSuggestions.length > 0 &&
            showSuggestions && (
              <div className="absolute bg-white w-full py-2 rounded-md shadow-2xl z-10">
                <ul>
                  {searchSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        dispatch(setSearchQuery(suggestion));
                      }}
                    >
                      🔍 {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        <button
          className="text-base md:text-2xl p-2 px-4 md:p-4 md:py-[0.25rem] border border-gray-200 border-l-0 rounded-r-full bg-gray-100"
          onClick={triggerSearch}
        >
          🔍
        </button>
      </div>
      <div className="col-auto md:col-span-2 flex items-center justify-end">
        <img src={CreateIcon} alt="Nav Menu" className="hidden md:block" />
        <img
          src={NotificationIcon}
          alt="Nav Menu"
          className="w-[1.5rem] md:w-8 mr-2 md:mx-4 cursor-pointer"
        />
        <img src={UserProfileIcon} alt="Nav Menu" className="mr-4" />
      </div>
    </div>
  );
};

export default Header;
