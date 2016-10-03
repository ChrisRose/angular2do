import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent }      from './contact-list/contact-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: ':filter',
    component: ContactListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
