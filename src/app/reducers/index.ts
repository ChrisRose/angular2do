import { combineReducers } from 'redux';
import { reducer as contacts } from './contacts';
import { reducer as filter } from './filter';

export const contactsApp = combineReducers({
  contacts,
  filter
});
