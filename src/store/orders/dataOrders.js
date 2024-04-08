import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersData: [],
  loading: false,
  error: null,
};

export const ordersDataSlice = createSlice({
  name: "ordersData",
  initialState,
  reducers: {
    loadingOrdersData: (state) => {
      state.loading = true;
    },
    getOrdersData: (state, action) => {
      state.ordersData = action.payload;
      state.loading = false;
    },
    getOrdersDataError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getOrdersData, loadingOrdersData, getOrdersDataError } =
  ordersDataSlice.actions;
