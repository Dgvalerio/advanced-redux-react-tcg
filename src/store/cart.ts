import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem, IItem } from '../interfaces';

const initialState = { visible: false, items: [] };

export type ICartState = { visible: boolean; items: ICartItem[] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state: ICartState) {
      state.visible = !state.visible;
    },
    addToCart(state: ICartState, action: PayloadAction<IItem>) {
      const itemInCart = state.items.find(
        (item) => item.title === action.payload.title
      );

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
