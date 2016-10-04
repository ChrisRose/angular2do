import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

import { TodoStore } from './todo.store';
import { FilterLinkComponent } from './filter-link/filter-link.component'

import { routing } from './app.routing';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoFocusDirective } from './todo-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    FilterLinkComponent,
    AddTodoComponent,
    TodoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    TodoStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
