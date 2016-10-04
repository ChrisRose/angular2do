import { SET_VISIBILITY_FILTER } from '../action-constants';

export function reducer(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
