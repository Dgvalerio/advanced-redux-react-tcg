import { createSlice } from '@reduxjs/toolkit';

const initialState = { visible: false };

export type ICartState = typeof initialState;

const cartSlice = createSlice({
  name: 'cart',
  initialState: { visible: false },
  reducers: {
    toggleCart(state: ICartState) {
      state.visible = !state.visible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
