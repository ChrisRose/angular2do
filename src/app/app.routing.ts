import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent }      from './todo-list/todo-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    component: TodoListComponent,
    data: {
      filter: 'all'
    }
  },
  {
    path: 'active',
    component: TodoListComponent,
    data: {
      filter: 'active'
    }
  },
  {
    path: 'completed',
    component: TodoListComponent,
    data: {
      filter: 'completed'
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
