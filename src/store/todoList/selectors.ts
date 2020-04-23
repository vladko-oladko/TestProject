import {RootState} from '../index';
import {ToDoInterface} from './../../common/interfaces/todo';
export const selectTodoList = ({todoList}: RootState): [ToDoInterface] => todoList;
