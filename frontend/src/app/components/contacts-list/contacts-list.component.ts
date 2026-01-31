import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService, Contact } from '../../services/contacts.service';
import { RouterLink } from '@angular/router';
  

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
  this.loadContacts();

  this.contactsService.refresh$.subscribe(() => {
    this.loadContacts();
  });
}

loadContacts() {
  this.contactsService.getContacts().subscribe(data => {
    this.contacts = data;
  });
}

delete(id: number) {
  this.contactsService.deleteContact(id).subscribe();
}


}
