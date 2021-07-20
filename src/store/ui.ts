import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartVisible: false };

export type IUIState = { cartVisible: boolean };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCartVisible(state: IUIState) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
