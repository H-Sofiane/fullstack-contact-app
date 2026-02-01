import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Contact {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = `${environment.apiUrl}/api/contacts/`;

  private refreshNeeded$ = new Subject<void>();
  get refresh$() {
    return this.refreshNeeded$.asObservable();
  }

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact).pipe(
      tap(() => this.refreshNeeded$.next())
    );
  }

  deleteContact(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`).pipe(
      tap(() => this.refreshNeeded$.next())
    );
  }

  updateContact(id: number, contact: Contact) {
    return this.http.put<Contact>(`${this.apiUrl}${id}/`, contact).pipe(
      tap(() => this.refreshNeeded$.next())
    );
  }
}
