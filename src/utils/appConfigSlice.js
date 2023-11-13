import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    sidebarVisible: true,
    fixSideBar: false,
    fixHeader: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    closeSideBar: (state) => {
      state.sidebarVisible = false;
    },
    fixSideBar: (state, action) => {
      state.fixSideBar = action.payload;
    },
    fixHeader: (state, action) => {
      state.fixHeader = action.payload;
    },
  },
});

export const { toggleSidebar, closeSideBar, fixSideBar } =
  appConfigSlice.actions;

export default appConfigSlice.reducer;
