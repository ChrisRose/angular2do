import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  starContact(contact: Contact): void {
    this.contactService.starContact(contact);
  }

  removeContact(contact: Contact):void {
    this.contactService.removeContact(contact);
  }

}
