import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { List, Map } from 'immutable';

@Injectable()
export class ContactService {
  contacts = List<Contact>();

  getContacts(): Promise<Contact[]> {
    return Promise.resolve(this.contacts);
  }

  addContact(newContact: String, id: number) {
    this.contacts = this.contacts.push({
      id: id,
      name: newContact,
      starred: false
    });
  }

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts = this.contacts.delete(index);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts = (<any>this.contacts).update(index, (contact) => {
      return {
        id: contact.id,
        name: contact.name,
        starred: !contact.starred
      };
    });
  }
}
