// Reducer

import { List } from 'immutable';
import { IContactAction } from './actions';
import { Contact as ContactModel} from './contact';

export function reducer(state: Immutable.List<ContactModel> = Immutable.List<ContactModel>(), action: IContactAction) {
  switch (action.type) {
    case 'ADD':
      return state.push({
        id: action.id,
        name: action.name,
        starred: false
      });
    case 'REMOVE':
      return state.delete(findIndexById(action));
    case 'STAR':
      return (<any>state).update(findIndexById(action), (contact) => {
        return {
          id: contact.id,
          name: contact.name,
          starred: !contact.starred
        };
      });
    default:
      return state;
  }

  function findIndexById(action) {
    let index = state.findIndex((contact) => contact.id === action.id);
    return index;
  }
}
