import { compose, createStore } from 'redux';
import { Todo } from './todo';
import { ITodoAction } from './actions';
import { List } from 'immutable';
import { todosApp } from './reducers/index';

const enhancer = compose(
  window.devToolsExtension && window.devToolsExtension()
);

export class TodoStore {
  store = createStore(todosApp, enhancer);

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
