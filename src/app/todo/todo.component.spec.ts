import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { TodoComponent } from './todo.component';

import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

let fixture: ComponentFixture<TodoComponent>;
let comp: TodoComponent;
let de: DebugElement;
let el: HTMLElement;
let destroyEl: DebugElement;
let toggleEl: DebugElement;
let todo: Todo;

beforeEach(() => {
  // refine the test module by declaring the test component
  TestBed.configureTestingModule({
    declarations: [ TodoComponent ],
    imports: [FormsModule]
  });

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
});

describe('Component: Todo', () => {
  it('should create an instance', () => {
    let component = new TodoComponent();
    expect(component).toBeTruthy();
  });

  it('displays the todo name', () => {
    // trigger change detection to update the view
    fixture.detectChanges();
    // query for the name <label> by CSS element selector
    de = fixture.debugElement.query(By.css('label'));
    el = de.nativeElement;
    expect(el.textContent).toContain(comp.todo.name);
  });

  it('should raise onRemoveToDo when todo is removed', () => {
    let selectedTodo: Todo;
    comp.onRemoveTodo.subscribe((todo: Todo) => selectedTodo = todo);
    destroyEl = fixture.debugElement.query(By.css('.destroy'));
    destroyEl.triggerEventHandler('click', null);
    expect(selectedTodo).toBe(todo);
  });

  it('should raise onToggleToDo when todo is toggled', () => {
    let selectedTodo: Todo;
    comp.onToggleTodo.subscribe((todo: Todo) => selectedTodo = todo);
    toggleEl = fixture.debugElement.query(By.css('.toggle'));
    toggleEl.triggerEventHandler('change', {
      target: toggleEl.nativeElement
    });
    expect(selectedTodo).toBe(todo);
  });

  it('should set make edit input visible on double-click', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('label'));
    de.triggerEventHandler('dblclick', null);
    fixture.detectChanges();
    let editEl = fixture.debugElement.query(By.css('.edit'));
    expect(editEl).toBeTruthy();
  });

  it('should revert todo text on cancel', fakeAsync(() => {
    let newTodoText: string = 'Watch The Get Down';
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('label'));
    de.triggerEventHandler('dblclick', null);
    fixture.detectChanges();
    let editEl = fixture.debugElement.query(By.css('.edit'));
    editEl.nativeElement.value = newTodoText;
    editEl.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(de.nativeElement.textContent).toContain(newTodoText); // todo text changed
    editEl.triggerEventHandler('keyup', {
      keyCode: 27
    });
    fixture.detectChanges();
    expect(de.nativeElement.textContent).toContain(comp.todo.name); // todo text reverted
  }));
});
