import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TodoStore } from '../todo.store';
import { Todo } from '../todo';
import { addTodo, starTodo, removeTodo, setVisibilityFilter } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
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
      this.incompleteCount = this.todos.filter(t => !t.completed).size
    });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'] || 'SHOW_ALL';
      if (filter === 'completed') {
        filter = 'SHOW_completed';
      } else {
        filter = 'SHOW_ALL';
      }
      this.TodoStore.dispatch(setVisibilityFilter(filter));
    });
  }

  addTodo(todo: string):void {
    this.TodoStore.dispatch(addTodo(todo, this.todoID++));
  }

  starTodo(todo: Todo): void {
    this.TodoStore.dispatch(starTodo(todo.id));
  }

  removeTodo(todo: Todo):void {
    this.TodoStore.dispatch(removeTodo(todo.id));
  }
}
