import {createSelector} from '@reduxjs/toolkit';

export const selectUser = ({user}) => user;

export const selectIsLoggedUser = createSelector(
  selectUser,
  ({isLoggedIn}) => isLoggedIn,
);
export const selectUserName = createSelector(
  selectUser,
  ({userName}) => userName,
);
