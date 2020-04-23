import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    isLoggedIn: null,
  },
  reducers: {
    setLoginStatus(state, {payload: status}) {
      state.isLoggedIn = status;
    },
    setUserName(state, {payload: name}) {
      state.userName = name;
    },
  },
});

export const {
  setLoginStatus: setLoginStatusAction,
  editTodo: editTodoAction,
  setUserName: setUserNameAction,
} = userSlice.actions;
export default userSlice.reducer;
