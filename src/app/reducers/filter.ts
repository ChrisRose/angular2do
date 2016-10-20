import { SET_VISIBILITY_FILTER } from '../action-constants';
import { ITodoAction } from '../actions';

export function reducer(state: string = 'SHOW_ALL', action: ITodoAction) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
