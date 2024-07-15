import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    // addMessage: (state, action) => {
    //   state.messages.splice(LIVE_CHAT_COUNT, 1);
    //   state.messages.push(action.payload);
    // },
    addMessage: (state, action) => {
      if (state.messages.length >= LIVE_CHAT_COUNT) {
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
