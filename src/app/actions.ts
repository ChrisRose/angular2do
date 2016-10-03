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

export function starTodo(id: number): ITodoAction {
  return {
    type: 'STAR',
    id
  };
}

export function setVisibilityFilter (filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
