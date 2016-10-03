import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent }      from './todo-list/todo-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: ':filter',
    component: TodoListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
