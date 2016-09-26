import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      { name: 'John', starred: false },
      { name: 'Brigitte', starred: false }
    ];
  }

  getContacts(): Promise<Contact[]> {
    return Promise.resolve(this.contacts);
  }

  addContact(newContact: String) {
    this.contacts.push({
      name: newContact,
      starred: false
    });
  }

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].starred = !this.contacts[index].starred;
  }
}
