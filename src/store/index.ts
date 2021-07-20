import { configureStore } from '@reduxjs/toolkit';

import cart, { ICartState } from './cart';

const store = configureStore({
  reducer: {
    cart,
  },
});

export type IStore = { cart: ICartState };

export default store;
