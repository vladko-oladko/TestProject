import {createSlice} from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isShownSpinner: false,
  },
  reducers: {
    saveShowSpinnerStatus(state, {payload: status}) {
      state.isShownSpinner = status;
    },
  },
});

export const {
  saveShowSpinnerStatus: saveShowSpinnerStatusAction,
} = globalSlice.actions;
export default globalSlice.reducer;
