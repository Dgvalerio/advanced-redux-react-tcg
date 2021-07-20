import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INotification } from '../interfaces';

const initialState = { cartVisible: false, notification: null };

export type IUIState = {
  cartVisible: boolean;
  notification: INotification | null;
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCartVisible(state: IUIState) {
      state.cartVisible = !state.cartVisible;
    },
    showNotification(state: IUIState, action: PayloadAction<INotification>) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
