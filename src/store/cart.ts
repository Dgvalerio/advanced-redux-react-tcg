import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem, IItem } from '../interfaces';

const initialState = { items: [], totalQuantity: 0, changed: false };

export type ICartState = {
  items: ICartItem[];
  totalQuantity: number;
  changed: boolean;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state: ICartState, action: PayloadAction<ICartState>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state: ICartState, action: PayloadAction<IItem>) {
      const itemInCart = state.items.find(
        (item) => item.title === action.payload.title
      );

      state.totalQuantity += 1;
      state.changed = true;

      if (itemInCart) {
        const indexOfItem = state.items.indexOf(itemInCart);
        state.items[indexOfItem].quantity += 1;
        state.items[indexOfItem].total += itemInCart.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    removeFromCart(state: ICartState, action: PayloadAction<IItem>) {
      const itemInCart = state.items.find(
        (item) => item.title === action.payload.title
      );

      state.totalQuantity -= 1;
      state.changed = true;

      if (itemInCart) {
        const indexOfItem = state.items.indexOf(itemInCart);

        if (itemInCart.quantity > 1) {
          state.items[indexOfItem].quantity -= 1;
          state.items[indexOfItem].total -= itemInCart.price;
        } else {
          state.items.splice(indexOfItem, 1);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
