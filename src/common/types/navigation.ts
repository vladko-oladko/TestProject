import {ToDoInterface} from '../interfaces/todo';

export type ParamList = {
  TodoList: any;
  EditTodo: {todoData: ToDoInterface};
  CreateTodo: {todoData: ToDoInterface};
};
