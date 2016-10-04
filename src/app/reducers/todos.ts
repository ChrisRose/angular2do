// Reducer
import { List } from 'immutable';
import { ITodoAction } from '../actions';
import { Todo as TodoModel} from '../todo';
import { ADD, REMOVE, SAVE, TOGGLE, TOGGLE_ALL, CLEAR_COMPLETED  } from '../action-constants';

function findIndexById(state, action) {
  return state.findIndex((todo) => todo.id === action.id);
}

export function reducer(state: List<TodoModel> = List<TodoModel>(), action: ITodoAction) {
  switch (action.type) {
    case ADD:
      return state.push({
        id: action.id,
        name: action.name,
        completed: false
      });
    case REMOVE:
      return state.delete(findIndexById(state, action));
    case SAVE:
      return (<any>state).update(findIndexById(state, action), (todo) => {
        return {
          id: todo.id,
          name: todo.name,
          completed: todo.completed
        };
      });
    case TOGGLE:
      return (<any>state).update(findIndexById(state, action), (todo) => {
        return {
          id: todo.id,
          name: todo.name,
          completed: !todo.completed
        };
      });
    case TOGGLE_ALL:
      return (<any>state).map(function(todo) {
        return {
          id: todo.id,
          name: todo.name,
          completed: action.completed
        };
    });
    case CLEAR_COMPLETED:
      return (<any>state).filter(function(todo) {
        return !todo.completed;
      });
    default:
      return state;
  }
}
