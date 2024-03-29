import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "./components/CartSlice";
import CartSlice from "../components/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
