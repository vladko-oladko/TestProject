import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  userName: string,
  isLoggedIn: boolean | null,
}

const initialState: UserState = {
  userName: '',
  isLoggedIn: null,
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginStatus(state, {payload: status}: PayloadAction<boolean>) {
      state.isLoggedIn = status;
    },
    setUserName(state, {payload: name}: PayloadAction<string>) {
      state.userName = name;
    },
  },
});

export const {
  setLoginStatus: setLoginStatusAction,
  setUserName: setUserNameAction,
} = userSlice.actions;
export default userSlice.reducer;
