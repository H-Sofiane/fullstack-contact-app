import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
  if (this.form.valid) {
    this.contactsService.addContact(this.form.value).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}

}
