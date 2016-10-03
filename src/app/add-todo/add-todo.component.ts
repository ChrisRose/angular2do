import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output()
  onAddTodo: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo(todo: string, todoInput): void {
    this.onAddTodo.next(todo);
    todoInput.value = '';
    todoInput.focus();
  }

}
