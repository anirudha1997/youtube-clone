import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./appConfigSlice";
import videosReducer from "./videosSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    videos: videosReducer,
  },
});

export default appStore;
