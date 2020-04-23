import {createSlice} from '@reduxjs/toolkit';
import shortid from 'shortid';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    saveTodoList(state, {payload: todoList}) {
      console.log(todoList)
      return todoList;
    },
    editTodo(state, {payload: todo}) {
      const {id} = todo;
      return state.map((item) => {
        if (item.id === id) {
          return todo;
        }
        return item;
      });
    },
    createTodo(state, {payload: todo}) {
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
