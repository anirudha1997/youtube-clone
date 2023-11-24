import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    cachedSuggestions: {},
    searchResults: [],
    nextPageToken: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    cacheSuggestions: (state, action) => {
      state.cachedSuggestions = Object.assign(
        state.cachedSuggestions,
        action.payload
      );
    },
    addSearchResults: (state, action) => {
      console.log("Inside slice:", action.payload);
      state.searchResults = [...state.searchResults, ...action.payload.items];
      state.nextPageToken = action.payload.nextPageToken;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.nextPageToken = null;
    },
  },
});

export const {
  setSearchQuery,
  cacheSuggestions,
  addSearchResults,
  clearSearchResults,
} = searchSlice.actions;

export default searchSlice.reducer;
