import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactStore } from '../contact.store';
import { Contact } from '../contact';
import { addContact, starContact, removeContact } from '../actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactID: number;
  contacts: <Contacts>[];

  constructor(private contactService: ContactService, private contactStore: ContactStore) {
    this.contactID = 0;

    this.contactStore.store.subscribe(() => {
      this.contacts = this.contactStore.contacts;
    });
  }

  ngOnInit() {
    // this.contactService.addContact('John', this.contactID++);
    this.contactStore.dispatch(addContact('John', this.contactID++));
    this.contactStore.dispatch(addContact('Brigitte', this.contactID++));
  }

  addContact(contact: string):void {
    // this.contactService.addContact(contact, this.contactID++);
    // this.getContacts();
    this.contactStore.dispatch(addContact(contact, this.contactID++));
  }

  starContact(contact: Contact): void {
    this.contactStore.dispatch(starContact(contact.id));
  }

  removeContact(contact: Contact):void {
    this.contactStore.dispatch(removeContact(contact.id));
  }

  // getContacts(): void {
  //   // this.contactService.getContacts().then(contacts => this.contacts = contacts);
  //   this.contacts = this.store.contacts;
  // }

}
