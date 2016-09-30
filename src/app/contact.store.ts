import { createStore } from 'redux';
import { Contact } from './contact';
import { IContactAction } from './actions';
import { List } from 'immutable';
import { contactsApp } from './reducers/index';

export class ContactStore {
  store = createStore(contactsApp,
    window.devToolsExtension && window.devToolsExtension());

  get contacts(): List<Contact> {
    return this.store.getState().contacts;
  }

  get filter() {
    return this.store.getState().filter;
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}
