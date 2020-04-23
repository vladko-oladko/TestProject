import {all} from 'redux-saga/effects';
import todoList from './todoList/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  yield all([...todoList, ...user]);
}
