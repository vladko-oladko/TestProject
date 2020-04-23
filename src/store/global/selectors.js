import {createSelector} from '@reduxjs/toolkit';

export const selectGlobal = ({global}) => global;
export const selectIsShownSpinner = createSelector(
  selectGlobal,
  ({isShownSpinner}) => isShownSpinner,
);
