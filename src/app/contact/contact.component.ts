import { Component, Input, Output, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  @Input()
  contact: Contact;

  @Output()
  onRemoveContact: EventEmitter = new EventEmitter();

  @Output()
  onStarContact: EventEmitter = new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit() {}

  starContact(contact: Contact): void {
    this.onStarContact.next(contact);
  }

  doRemoveContact(contact: Contact) {
    this.onRemoveContact.next(contact);
  }
}
