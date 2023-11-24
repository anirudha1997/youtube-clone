import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/appConfigSlice";
import VideoInfo from "./VideoInfo";
import { addMessage, clearChat } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const WatchVideo = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const sideBarOpen = useSelector((store) => store.appConfig.sidebarVisible);
  useEffect(() => {
    dispatch(closeSideBar());
    dispatch(clearChat());
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Lorem ipsum",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const sectionMargin = sideBarOpen ? "ml-0 lg:ml-[20%]" : "ml-0";
  return (
    <div className={"p-5 flex-1 " + sectionMargin}>
      <VideoInfo videoId={params.get("v")} />
    </div>
  );
};

export default WatchVideo;
