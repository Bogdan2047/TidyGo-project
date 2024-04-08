import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: null,
  loading: false,
  error: "",
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    loadingChats: (state) => {
      state.loading = true;
    },
    getChatsData: (state, action) => {
      state.chats = action.payload;
      state.loading = false;
    },
    errorGetChats: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadingChats, getChatsData, errorGetChats } = chatsSlice.actions;
