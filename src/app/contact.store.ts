import { createStore } from 'redux';
import { Contact } from './contact';
import { IContactAction } from './actions';
import { reducer } from './reducer';
import { List } from 'immutable';

export class ContactStore {
  store = createStore(reducer,
    List<Contact>(),
    window.devToolsExtension && window.devToolsExtension());

  get contacts(): List<Contact> {
    return this.store.getState();
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}
