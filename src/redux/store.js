import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    handlecartSlice: cartSlice.reducer,
  },
});

export default store;
