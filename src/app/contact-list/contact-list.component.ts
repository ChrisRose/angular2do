import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ContactStore } from '../contact.store';
import { Contact } from '../contact';
import { addContact, starContact, removeContact, setVisibilityFilter } from '../actions';

const getVisibleContacts = (contacts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return contacts
    case 'SHOW_STARRED':
      return contacts.filter(t => t.starred)
  }
};

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactID: number;
  contacts: Contact[];

  constructor(
    private contactStore: ContactStore,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.contactID = 0;

    this.contactStore.store.subscribe(() => {
      this.contacts = getVisibleContacts(this.contactStore.contacts, this.contactStore.filter);
    });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'] || 'SHOW_ALL';
      if (filter === 'starred') {
        filter = 'SHOW_STARRED';
      } else {
        filter = 'SHOW_ALL';
      }
      this.contactStore.dispatch(setVisibilityFilter(filter));
    });
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
