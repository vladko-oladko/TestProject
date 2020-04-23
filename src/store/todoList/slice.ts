import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToDoInterface} from './../../common/interfaces/todo';
import shortid from 'shortid';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    saveTodoList(state, {payload: todoList}: PayloadAction<[ToDoInterface]>) {
      console.log(todoList)
      return todoList;
    },
    editTodo(state, {payload: todo}: PayloadAction<ToDoInterface>) {
      const {id} = todo;
      return state.map((item) => {
        if (item.id === id) {
          return todo;
        }
        return item;
      });
    },
    createTodo(state, {payload: todo}: PayloadAction<ToDoInterface>) {
      state.push({id: shortid(), ...todo});
    },
  },
});

export const {
  saveTodoList: saveTodoListAction,
  editTodo: editTodoAction,
  createTodo: createTodoAction,
} = todoListSlice.actions;
export default todoListSlice.reducer;
