import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeOrder: [],
  loading: false,
  error: null,
};

export const ordersForEmployeeSlice = createSlice({
  name: "ordersForEmployee",
  initialState,
  reducers: {
    loadingOrdersForEmployee: (state) => {
      state.loading = true;
    },
    getOrdersForEmployee: (state, action) => {
      state.employeeOrder = action.payload;
      state.loading = false;
    },
    getOrdersForEmployeeError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadingOrdersForEmployee,
  getOrdersForEmployee,
  getOrdersForEmployeeError,
} = ordersForEmployeeSlice.actions;
