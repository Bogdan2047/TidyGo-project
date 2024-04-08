import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import { createOrdersSlice } from "./orders/createOrderSlice";
import { ordersDataSlice } from "./orders/dataOrders";
import { employeeSlice } from "./employee/employeeSlice";
import { ordersForEmployeeSlice } from "./location/employeeOrder";
import { employeeLocationSlice } from "./employee/trackingEmployee";
import { chatsSlice } from "./chats/chatsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    createOrders: createOrdersSlice.reducer,
    ordersData: ordersDataSlice.reducer,
    employee: employeeSlice.reducer,
    orderForEmployee: ordersForEmployeeSlice.reducer,
    employeeLocation: employeeLocationSlice.reducer,
    chats: chatsSlice.reducer,
  },
});
