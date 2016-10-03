// Reducer
import { List } from 'immutable';
import { ITodoAction } from '../actions';
import { Todo as TodoModel} from '../todo';

export function reducer(state: List<TodoModel> = List<TodoModel>(), action: ITodoAction) {
  switch (action.type) {
    case 'ADD':
      return state.push({
        id: action.id,
        name: action.name,
        completed: false
      });
    case 'REMOVE':
      return state.delete(findIndexById(action));
    case 'SAVE':
      return (<any>state).update(findIndexById(action), (todo) => {
        return {
          id: todo.id,
          name: todo.name,
          completed: todo.completed
        };
      });
    case 'TOGGLE':
      return (<any>state).update(findIndexById(action), (todo) => {
        return {
          id: todo.id,
          name: todo.name,
          completed: !todo.completed
        };
      });
    default:
      return state;
  }

  function findIndexById(action) {
    let index = state.findIndex((todo) => todo.id === action.id);
    return index;
  }
}
