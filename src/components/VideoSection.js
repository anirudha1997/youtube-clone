import React, { useEffect } from "react";
import { YOUTUBE_API } from "./../utils/constants";
import VideoPlaceholder from "./VideoPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../utils/videosSlice";

const VideoSection = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {popularVideos.map((video) => (
        <VideoPlaceholder
          key={video.id}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.high.url}
          channel={video.snippet.channelTitle}
          views={video.statistics.viewCount}
        />
      ))}
    </div>
  );
};

export default VideoSection;
