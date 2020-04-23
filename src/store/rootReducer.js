import {combineReducers} from 'redux';
import todoList from './todoList/slice';
import user from './user/slice';

export default combineReducers({
  todoList,
  user,
});
