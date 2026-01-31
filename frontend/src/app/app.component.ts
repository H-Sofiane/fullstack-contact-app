import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
