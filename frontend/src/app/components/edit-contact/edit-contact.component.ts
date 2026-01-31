import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './edit-contact.component.html',
})
export class EditContactComponent implements OnInit {

  form!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.contactsService.getContacts().subscribe(list => {
      const contact = list.find(c => c.id === this.id);
      if (contact) this.form.patchValue(contact);
    });
  }

  submit() {
    this.contactsService.updateContact(this.id, this.form.value).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
