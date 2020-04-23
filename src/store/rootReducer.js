import {combineReducers} from 'redux';
import todoList from './todoList/slice';
import user from './user/slice';
import global from './global/slice';

export default combineReducers({
  todoList,
  global,
  user,
});
