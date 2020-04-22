import {all} from 'redux-saga/effects';
import todoList from './todoList/sagas';

export default function* rootSaga() {
  yield all([...todoList]);
}
