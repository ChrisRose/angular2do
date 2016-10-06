import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';

import { Todo } from '../todo';

var fixture, comp;

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

  var todo: Todo = {
    id: 1,
    name: 'Watch Luke Cage',
    completed: false
  }
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
    // query for the title <h1> by CSS element selector
    var de = fixture.debugElement.query(By.css('label'));
    expect(de.nativeElement.textContent).toContain(comp.todo.name);
  });
});
