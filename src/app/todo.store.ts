import { createStore } from 'redux';
import { Todo } from './todo';
import { ITodoAction } from './actions';
import { List } from 'immutable';
import { todosApp } from './reducers/index';

export class TodoStore {
  store = createStore(todosApp,
    window.devToolsExtension && window.devToolsExtension());

  get todos(): List<Todo> {
    return this.store.getState().todos;
  }

  get filter() {
    return this.store.getState().filter;
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
