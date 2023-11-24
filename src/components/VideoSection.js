import React, { useEffect } from "react";
import { YOUTUBE_API } from "./../utils/constants";
import VideoPlaceholder from "./VideoPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../utils/videosSlice";
import TagButton from "./TagButton";

const VideoSection = () => {
  const dispatch = useDispatch();
  const fixSideBar = useSelector((store) => store.appConfig.fixSideBar);
  const sideBarOpen = useSelector((store) => store.appConfig.sidebarVisible);
  const popularVideos = useSelector((store) => store.videos.popularVideos);
  useEffect(() => {
    fetchfn();
  }, []);

  const fetchfn = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addPopularVideos(json?.items));
  };

  if (!popularVideos) return;

  const sectionMargin = sideBarOpen ? "ml-0 lg:ml-[20%]" : "ml-0";

  return (
    <div className={"p-5 flex-1 " + sectionMargin}>
      <div className="flex flex-wrap items-center">
        <TagButton label="All" />
        <TagButton label="Podcasts" />
        <TagButton label="Cricket" />
        <TagButton label="Music" />
        <TagButton label="Games" />
        <TagButton label="Recently Uploaded" />
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {popularVideos.map((video) => (
          <VideoPlaceholder
            key={video.id}
            id={video.id}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.high.url}
            channel={video.snippet.channelTitle}
            views={video.statistics.viewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
