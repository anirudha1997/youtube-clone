import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appConfigSlice";
import VideoInfo from "./VideoInfo";
import VideoSuggestions from "./VideoSuggestions";

const WatchVideo = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  });
  return (
    <div className="p-5 flex-1 grid grid-cols-3">
      <VideoInfo videoId={params.get("v")} />
      <VideoSuggestions />
    </div>
  );
};

export default WatchVideo;
