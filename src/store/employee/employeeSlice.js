import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: null,
  loading: false,
  error: "",
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    loadingEmployee: (state) => {
      state.loading = true;
    },
    getEmployee: (state, action) => {
      state.employee = action.payload;
      state.loading = false;
    },
    errorGetEmployee: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadingEmployee, getEmployee, errorGetEmployee } =
  employeeSlice.actions;
