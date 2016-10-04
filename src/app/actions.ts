import { Todo } from './todo';
import { ADD, REMOVE, SAVE, TOGGLE, TOGGLE_ALL, CLEAR_COMPLETED, SET_VISIBILITY_FILTER } from './action-constants';

export interface ITodoAction {
  type: string;
  id?: number;
  name?: string;
  completed?: boolean;
}

export function addTodo(name: string, id: number): ITodoAction {
  return {
    type: ADD,
    id,
    name
  };
}

export function clearCompleted(): ITodoAction {
  return {
    type: CLEAR_COMPLETED
  }
}

export function removeTodo(id: number): ITodoAction {
  return {
    type: REMOVE,
    id
  };
}

export function saveTodo(name: string, id: number): ITodoAction {
  return {
    type: SAVE,
    id,
    name
  };
}

export function toggleTodo(id: number): ITodoAction {
  return {
    type: TOGGLE,
    id
  };
}

export function toggleAllTodos(value: boolean): ITodoAction {
  return {
    type: TOGGLE_ALL,
    completed: value
  };
}

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
