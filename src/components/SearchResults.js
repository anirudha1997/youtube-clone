import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchResultCard from "./SearchResultCard";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addSearchResults } from "../utils/searchSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const searchResults = useSelector((store) => store.search.searchResults);
  const nextPageToken = useSelector((store) => store.search.nextPageToken);
  const fixSideBar = useSelector((store) => store.appConfig.fixSideBar);
  const sideBarOpen = useSelector((store) => store.appConfig.sidebarVisible);
  const sectionMargin = sideBarOpen ? "ml-0 lg:ml-[20%]" : "ml-0";

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Load more data when the user is near the bottom
      loadMoreResults();
    }
  };

  const loadMoreResults = async () => {
    if (nextPageToken) {
      //   const data = await fetch(
      //     `${YOUTUBE_SEARCH_API}&pageToken=${nextPageToken}`
      //   );
      const data = await fetch(
        YOUTUBE_SEARCH_API + searchQuery + "&pageToken=" + nextPageToken
      );
      const json = await data.json();
      if (json)
        dispatch(
          addSearchResults({
            items: json?.items,
            nextPageToken: json.nextPageToken,
          })
        );
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPageToken]);

  if (searchResults !== null) {
    return (
      <div className={"p-5 flex-1 " + sectionMargin}>
        {searchResults.map((card) => (
          <SearchResultCard
            key={card.etag}
            videoId={card.id.videoId}
            info={card.snippet}
            thumbnail={card.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default SearchResults;
