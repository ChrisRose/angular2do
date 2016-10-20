/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { TodoComponent } from './todo.component';

import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

let fixture: ComponentFixture<TodoComponent>;
let comp: TodoComponent;
let todo: Todo;
let page: Page;

beforeEach(() => {
  // refine the test module by declaring the test component
  TestBed.configureTestingModule({
    declarations: [ TodoComponent ],
    imports: [FormsModule]
  });

  createComponent();
});

describe('Component: Todo', () => {
  it('should create an instance', () => {
    let component = new TodoComponent();
    expect(component).toBeTruthy();
  });

  it('displays the todo name', () => {
    expect(page.labelEl.nativeElement.textContent).toContain(comp.todo.name);
  });

  it('should raise onRemoveToDo when todo is removed', () => {
    let selectedTodo: Todo;
    comp.onRemoveTodo.subscribe((todo: Todo) => selectedTodo = todo);
    page.destroyEl.triggerEventHandler('click', null);
    expect(selectedTodo).toBe(todo);
  });

  it('should raise onToggleToDo when todo is toggled', () => {
    let selectedTodo: Todo;
    comp.onToggleTodo.subscribe((todo: Todo) => selectedTodo = todo);
    page.toggleEl.triggerEventHandler('change', {
      target: page.toggleEl.nativeElement
    });
    expect(selectedTodo).toBe(todo);
  });

  it('should set make edit input visible on double-click', () => {
    page.labelEl.triggerEventHandler('dblclick', null);
    fixture.detectChanges();
    let editEl = fixture.debugElement.query(By.css('.edit'));
    expect(editEl).toBeTruthy();
  });

  it('should revert todo text on cancel', fakeAsync(() => {
    let newTodoText: string = 'Watch The Get Down';
    fixture.detectChanges();
    page.labelEl.triggerEventHandler('dblclick', null);
    fixture.detectChanges();
    let editEl = fixture.debugElement.query(By.css('.edit'));
    editEl.nativeElement.value = newTodoText;
    editEl.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(page.labelEl.nativeElement.textContent).toContain(newTodoText); // todo text changed
    editEl.triggerEventHandler('keyup', {
      keyCode: 27
    });
    fixture.detectChanges();
    expect(page.labelEl.nativeElement.textContent).toContain(comp.todo.name); // todo text reverted
  }));
});

/** Create the TodoComponent, initialize it, set test variables  */
function createComponent() {
  // create component and test fixture
  fixture = TestBed.createComponent(TodoComponent);

  // get test component from the fixture
  comp = fixture.componentInstance;

  todo = {
    id: 1,
    name: 'Watch Luke Cage',
    completed: false
  };
  comp.todo = todo;

  page = new Page();

  fixture.detectChanges();
  page.addPageElements();
}

class Page {
  labelEl: DebugElement;
  destroyEl: DebugElement;
  toggleEl: DebugElement;

  addPageElements() {
    this.labelEl = fixture.debugElement.query(By.css('label'));
    this.destroyEl = fixture.debugElement.query(By.css('.destroy'));
    this.toggleEl = fixture.debugElement.query(By.css('.toggle'));
  }
}
