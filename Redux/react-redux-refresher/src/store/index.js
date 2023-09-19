import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import UIReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    UI: UIReducer,
  },
});

export default store;
