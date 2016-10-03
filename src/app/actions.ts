import { Todo } from './todo';

export interface ITodoAction {
  type: string;
  id: number;
  name?: string;
}

export function addTodo(name: string, id: number): ITodoAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function removeTodo(id: number): ITodoAction {
  return {
    type: 'REMOVE',
    id
  };
}

export function saveTodo(name: string, id: number): ITodoAction {
  return {
    type: 'SAVE',
    id,
    name
  };
}

export function toggleTodo(id: number): ITodoAction {
  return {
    type: 'TOGGLE',
    id
  };
}

export function setVisibilityFilter (filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
