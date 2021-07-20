import { configureStore } from '@reduxjs/toolkit';

import cart, { ICartState } from './cart';
import ui, { IUIState } from './ui';

const store = configureStore({
  reducer: {
    cart,
    ui,
  },
});

export type IStore = { cart: ICartState; ui: IUIState };

export default store;
