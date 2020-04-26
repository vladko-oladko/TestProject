import {RootState} from '../index';
import { TodoListStateInterface } from './slice';
import { createSelector } from '@reduxjs/toolkit';
import {ToDoInterface} from './../../common/interfaces/todo';

const selectTodoListSlice = ({todoList}: RootState): TodoListStateInterface => todoList;
export const selectTodoList = createSelector(selectTodoListSlice, ({data}: TodoListStateInterface): ToDoInterface[] => data || []);
