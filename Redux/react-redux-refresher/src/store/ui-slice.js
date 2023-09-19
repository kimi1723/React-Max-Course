import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice.reducer;
