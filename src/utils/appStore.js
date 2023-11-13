import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./appConfigSlice";
import videosReducer from "./videosSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    videos: videosReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default appStore;
