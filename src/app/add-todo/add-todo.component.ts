import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output()
  onAddTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo(todo: string, todoInput): void {
    if (todo === '') {
      return;
    }
    this.onAddTodo.next(todo.trim());
    todoInput.value = '';
    todoInput.focus();
  }

}
