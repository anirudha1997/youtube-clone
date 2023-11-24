import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.splice(10, 1);
      state.unshift(action.payload);
    },
    clearChat: () => {
      return [];
    },
  },
});

export const { addMessage, clearChat } = chatSlice.actions;

export default chatSlice.reducer;
