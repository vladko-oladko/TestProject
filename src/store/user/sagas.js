import {createAction} from '@reduxjs/toolkit';
import {put, takeEvery, call} from 'redux-saga/effects';
import {setLoginStatusAction, setUserName} from './slice';
import {getLoginStatus, setLoginStatus, requestAPI} from '../../services'


export const loginAction = createAction('user/login');
export const logoutAction = createAction('user/logout');
export const initUserLoginStatusAction = createAction(
  'user/initUserLoginStatus',
);

function* login({payload: {userName, password}}) {
  // yield put(setLoginStatusAction(getTodoItems()));
  const response = yield call(
    requestAPI,
    'https://portal.poimapper.com/json/auth/todo/login',
    {
      method: 'POST',
      body: {
        userName,
        password,
      },
      errMessage: 'Login failed',
    },
  );

  if (response) {
    yield put(setLoginStatusAction(true));
    setLoginStatus(true);
  }

  console.log(response, 'RESPONSE');
}

function* logout() {
  yield put(setLoginStatusAction(false));
  setLoginStatus(false);
}

function* initUserLoginStatus() {
  const status = yield call(getLoginStatus);
  yield put(setLoginStatusAction(status));
}

export default [
  takeEvery(loginAction, login),
  takeEvery(logoutAction, logout),

  takeEvery(initUserLoginStatusAction, initUserLoginStatus),
];