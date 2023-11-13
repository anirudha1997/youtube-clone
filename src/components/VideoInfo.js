import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";

const VideoInfo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    fetchfn();
  }, []);

  const fetchfn = async () => {
    const data = await fetch(YOUTUBE_VIDEO_INFO_API + videoId);
    const json = await data.json();
    setVideoData(json?.items[0]);
  };

  if (!videoData) return;

  console.log(videoData);
  const { channelId, description, title, publishedAt } = videoData?.snippet;
  const { viewCount } = videoData?.statistics;

  const timestamp = new Date(publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    timestamp
  );
  return (
    <div className="col-span-2">
      <iframe
        className="w-full p-3 aspect-video"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-xl font-bold pl-3 pb-3">{title}</p>
      <div className="bg-gray-100 rounded-md ml-3 p-4">
        <p className="py-2 text-sm font-bold">
          {viewCount} views {formattedDate}
        </p>
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
