import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TodoStore } from '../todo.store';
import { Todo } from '../todo';
import { addTodo,
         toggleTodo,
         toggleAllTodos,
         removeTodo,
         saveTodo,
         clearCompleted,
         setVisibilityFilter } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
  }
};

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoID: number;
  todos: Todo[];
  incompleteCount: number;

  constructor(
    private TodoStore: TodoStore,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.todoID = 0;

    this.TodoStore.store.subscribe(() => {
      this.todos = getVisibleTodos(this.TodoStore.todos, this.TodoStore.filter);
      this.incompleteCount = this.TodoStore.todos.filter(t => !t.completed).size
    });
  }

  ngOnInit() {
    this.route.data.forEach((data: { filter }) => {
      let filter = data.filter;
      if (data.filter === 'completed') {
        filter = 'SHOW_COMPLETED';
      } else if (filter === 'active'){
        filter = 'SHOW_ACTIVE';
      } else {
        filter = 'SHOW_ALL';
      }

      this.TodoStore.dispatch(setVisibilityFilter(filter));
    })
  }

  addTodo(todo: string):void {
    this.TodoStore.dispatch(addTodo(todo, this.todoID++));
  }

  toggleTodo(todo: Todo): void {
    this.TodoStore.dispatch(toggleTodo(todo.id));
  }

  saveTodo(todo: Todo):void {
    this.TodoStore.dispatch(saveTodo(todo.name, todo.id));
  }

  removeTodo(todo: Todo):void {
    this.TodoStore.dispatch(removeTodo(todo.id));
  }

  allCompleted():boolean {
    if (this.TodoStore.todos.size === 0) { return false; }
    return this.TodoStore.todos.filter(t => t.completed).size === this.TodoStore.todos.size
  }

  isCompleted():number {
    return this.TodoStore.todos.filter(t => t.completed).size
  }

  toggleAllTodos(value: boolean):void {
    this.TodoStore.dispatch(toggleAllTodos(value));
  }

  clearCompleted():void {
    this.TodoStore.dispatch(clearCompleted());
  }
}
