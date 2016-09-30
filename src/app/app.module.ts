import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

import { ContactStore } from './contact.store';
import { ContactService } from './contact.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactStore,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
