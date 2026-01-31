import { Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:id', component: EditContactComponent },
];
