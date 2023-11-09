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
  },
});

export const { toggleSidebar } = appConfigSlice.actions;

export default appConfigSlice.reducer;
