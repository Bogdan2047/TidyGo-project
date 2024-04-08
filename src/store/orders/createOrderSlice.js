import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderData: null,
};

export const createOrdersSlice = createSlice({
  name: "createOrders",
  initialState,
  reducers: {
    createOrders: (state, action) => {
      state.orderData = action.payload;
      state.loader = false;
    },
    getEmployee: (state, action) => {
      state.orderData.employee = action.payload;
    },
    paymentOrder: (state, action) => {
      state.orderData.payment = action.payload;
    },
    cleanOrder: (state, action) => {
      state.orderData.payment = action.payload;
    },
  },
});

export const { createOrders, getEmployee, paymentOrder, cleanOrder } =
  createOrdersSlice.actions;
