import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: "",
  notAuthGoogle: false,
  notAuthLogin: false,
  addressBuild: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingUser: (state) => {
      state.loading = true;
    },
    getUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    errorGetUser: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    notAuthUserGoogle: (state, action) => {
      state.loading = false;
      state.notAuthGoogle = action.payload;
    },
    notAuthUserLogin: (state, action) => {
      state.loading = false;
      state.notAuthLogin = action.payload;
    },
    getAddress: (state, action) => {
      state.addressBuild = action.payload;
    },
  },
});

export const {
  getUser,
  loadingUser,
  errorGetUser,
  notAuthUserGoogle,
  notAuthUserLogin,
  getAddress,
} = userSlice.actions;
