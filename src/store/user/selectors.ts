import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {UserState} from './slice'

export const selectUser = ({user}: RootState): UserState => user;

export const selectIsLoggedUser = createSelector(
  selectUser,
  ({isLoggedIn}: UserState): boolean => isLoggedIn,
);
export const selectUserName = createSelector(
  selectUser,
  ({userName}: UserState): string => userName,
);
