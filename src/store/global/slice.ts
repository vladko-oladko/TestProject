import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GlobalState {
  isShownSpinner: boolean;
}

const initialState: GlobalState = {
  isShownSpinner: false,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    saveShowSpinnerStatus(state, {payload: status}: PayloadAction<boolean>) {
      state.isShownSpinner = status;
    },
  },
});

export const {
  saveShowSpinnerStatus: saveShowSpinnerStatusAction,
} = globalSlice.actions;
export default globalSlice.reducer;
