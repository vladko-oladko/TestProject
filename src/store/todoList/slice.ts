import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToDoInterface} from './../../common/interfaces/todo';
import shortid from 'shortid';


export interface TodoListStateInterface {
  data: ToDoInterface[];
}

const initialState: TodoListStateInterface = {
  data: [],
}


const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    saveTodoList(state: TodoListStateInterface, {payload: todoList}: PayloadAction<ToDoInterface[]>) {
      state.data = todoList;
    },
    editTodo(state: TodoListStateInterface, {payload: todo}: PayloadAction<ToDoInterface>) {
      const {id} = todo;
      state.data = state.data.map((item) => {
        if (item.id === id) {
          return todo;
        }
        return item;
      });
    },
    createTodo(state, {payload: todo}: PayloadAction<ToDoInterface>) {
      state.data.push({id: shortid(), ...todo});
    },
  },
});

export const {
  saveTodoList: saveTodoListAction,
  editTodo: editTodoAction,
  createTodo: createTodoAction,
} = todoListSlice.actions;
export default todoListSlice.reducer;
