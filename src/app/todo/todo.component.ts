import { Component, Input, Output, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  onRemoveTodo: EventEmitter = new EventEmitter();

  @Output()
  onToggleTodo: EventEmitter = new EventEmitter();

  @Output()
  onSaveTodo: EventEmitter = new EventEmitter();

  editMode: boolean = false;

  todoName: string;

  constructor() { }

  ngOnInit() {
    this.todoName = this.todo.name;
  }

  toggleTodo(todo: Todo): void {
    this.onToggleTodo.next(todo);
  }

  doRemoveTodo(todo: Todo) {
    this.onRemoveTodo.next(todo);
  }

  editTodo() {
    this.todoName = this.todo.name;
    this.editMode = true;
  }

  cancelEdit(keyCode: number) {
    const ESCAPE_KEY = 27;
    if (keyCode === ESCAPE_KEY) {
      this.editMode = false;
      this.todo.name = this.todoName;
    }
  }

  saveTodo(todo: Todo) {
    this.onSaveTodo.next(todo);
    this.todoName = todo.name;
    this.editMode = false;
  }
}
