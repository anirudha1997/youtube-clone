import { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import CommentList from "./CommentList";
import { commentsData } from "../utils/constants";
import LiveChat from "./LiveChat";

const VideoInfo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  const fetchfn = useCallback(async () => {
    const data = await fetch(YOUTUBE_VIDEO_INFO_API + videoId);
    const json = await data.json();
    setVideoData(json?.items[0]);
  }, [videoId]);

  useEffect(() => {
    fetchfn();
  }, [fetchfn]);

  if (!videoData) return;

  const { description, title, publishedAt } = videoData?.snippet;
  const { viewCount } = videoData?.statistics;

  const format = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  });

  const views = format.format(viewCount);

  const timestamp = new Date(publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    timestamp
  );
  return (
    <>
      <div className="grid grid-cols-3">
        <iframe
          className="w-full p-3 aspect-video col-span-3 lg:col-span-2 lg:h-[555px]"
          src={
            "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <LiveChat key={videoId} />
      </div>
      <div className="col-span-3 lg:col-span-2 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <p className="text-base lg:text-xl font-bold pl-3 pb-3">{title}</p>
          <div className="bg-gray-100 rounded-md ml-3 p-4">
            <p className="py-2 text-sm font-bold">
              {views} views {formattedDate}
            </p>
            <p className="whitespace-pre-line">{description}</p>
          </div>
          <p className="my-3 font-bold text-xl ml-3">Comments:</p>
          <CommentList comments={commentsData} />
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
