import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsAmount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment(state) {
      state.itemsAmount++;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
