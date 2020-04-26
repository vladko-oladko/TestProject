import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {put, takeEvery, call} from 'redux-saga/effects';
import { AnyAction } from 'redux'
import {setLoginStatusAction} from './slice';
import {saveShowSpinnerStatusAction} from '../global/slice';
import {getLoginStatus, setLoginStatus, requestAPI} from '../../services';
import {UserInterface} from '../../common/interfaces';
export const loginAction = createAction<PayloadAction<UserInterface>>('user/login');
export const logoutAction = createAction('user/logout');
export const initUserLoginStatusAction = createAction(
  'user/initUserLoginStatus',
);

function* login({payload: {userName, password}}: AnyAction) {
  yield put(saveShowSpinnerStatusAction(true));
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

  yield put(saveShowSpinnerStatusAction(false));
}

function* logout() {
  yield put(saveShowSpinnerStatusAction(true));

  yield put(setLoginStatusAction(false));
  setLoginStatus(false);

  yield put(saveShowSpinnerStatusAction(false));
}

function* initUserLoginStatus() {
  const status = yield call(getLoginStatus);
  yield put(setLoginStatusAction(status));
}

export default [
  takeEvery(logoutAction, logout),
  takeEvery(loginAction, login),
  takeEvery(initUserLoginStatusAction, initUserLoginStatus),
];
