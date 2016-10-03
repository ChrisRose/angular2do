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
  onStarTodo: EventEmitter = new EventEmitter();

  editMode: boolean = false;

  constructor() { }

  ngOnInit() {}

  starTodo(todo: Todo): void {
    this.onStarTodo.next(todo);
  }

  doRemoveTodo(todo: Todo) {
    this.onRemoveTodo.next(todo);
  }

  foo() {
    this.editMode = true;
    console.log(this.todo);
  }
}
