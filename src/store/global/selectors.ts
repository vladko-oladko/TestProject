import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';

export const selectGlobal = ({global}: RootState) => global;
export const selectIsShownSpinner = createSelector(
  selectGlobal,
  ({isShownSpinner}) => isShownSpinner,
);
