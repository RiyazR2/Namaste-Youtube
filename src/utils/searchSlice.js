import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload); // Merging Objects
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
