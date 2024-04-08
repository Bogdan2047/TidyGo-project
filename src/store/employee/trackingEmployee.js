import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackingEmployee: null,
  loading: false,
  error: "",
};

export const employeeLocationSlice = createSlice({
  name: "employeeLocation",
  initialState,
  reducers: {
    loadingEmployeeLocation: (state) => {
      state.loading = true;
    },
    getEmployeeDataLocation: (state, action) => {
      state.trackingEmployee = action.payload;
      state.loading = false;
    },
    errorGetEmployeeLocation: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadingEmployeeLocation,
  getEmployeeDataLocation,
  errorGetEmployeeLocation,
} = employeeLocationSlice.actions;
