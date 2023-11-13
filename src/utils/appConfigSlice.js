import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    sidebarVisible: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    closeSideBar: (state) => {
      state.sidebarVisible = false;
    },
  },
});

export const { toggleSidebar, closeSideBar } = appConfigSlice.actions;

export default appConfigSlice.reducer;
