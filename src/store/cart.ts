import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem, IItem } from '../interfaces';
import { uiActions } from './ui';

const initialState = { items: [] };

export type ICartState = { items: ICartItem[] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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

export const sendCartData = (cart: ICartState) => async (dispatch: any) => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending',
      message: 'Sending cart data!',
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      'https://react-tcg-14-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) throw new Error('Sending cart data failed!');
  };

  try {
    await sendRequest();
    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending cart data successfully!',
      })
    );
  } catch {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  }
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
