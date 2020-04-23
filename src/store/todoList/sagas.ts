import {createAction} from '@reduxjs/toolkit';
import {put, takeEvery} from 'redux-saga/effects';
import {getTodoItems} from '../../common/mock/todoItems';
import {saveTodoListAction} from './slice';

export const fetchTodoListAction = createAction('fetchTodoListAction');

function* fetchTodoList() {
  yield put(saveTodoListAction(getTodoItems()));
}

export default [takeEvery(fetchTodoListAction, fetchTodoList)];
