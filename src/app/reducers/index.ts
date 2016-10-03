import { combineReducers } from 'redux';
import { reducer as todos } from './todos';
import { reducer as filter } from './filter';

export const todosApp = combineReducers({
  todos,
  filter
});
