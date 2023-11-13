import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./appConfigSlice";
import videosReducer from "./videosSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    videos: videosReducer,
    search: searchReducer,
  },
});

export default appStore;
