import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/appConfigSlice";
import VideoInfo from "./VideoInfo";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const WatchVideo = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const fixSideBar = useSelector((store) => store.appConfig.fixSideBar);
  const sideBarOpen = useSelector((store) => store.appConfig.sidebarVisible);
  useEffect(() => {
    dispatch(closeSideBar());
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
  }, []);
  const sectionMargin = fixSideBar && sideBarOpen ? "ml-[20%]" : "ml-0";
  return (
    <div className={"p-5 flex-1 " + sectionMargin}>
      <VideoInfo videoId={params.get("v")} />
    </div>
  );
};

export default WatchVideo;
