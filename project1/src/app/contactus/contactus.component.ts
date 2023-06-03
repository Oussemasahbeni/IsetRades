import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidationErrors } from '@angular/forms';
import { IsetService } from '../iset.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  form: any;

  constructor(private ContactForm: FormBuilder, private service: IsetService, private toastr: ToastrService) {

    this.form = this.ContactForm.group(
      {
        name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email, Validators.minLength(3)]],
        subject: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]],
        phone: ['', [Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(8)]],
        text: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]]
      }
    )
  }

  // Declare a flag variable outside the function
  isFormSubmitted: boolean = false

  onsubmit() {
    if (this.form.valid) {
      this.isFormSubmitted = true; // Set the flag to true to prevent multiple submissions
      this.service.sendUsers(this.form.value).subscribe({
        next: () => {
          console.log(this.form.value);
          this.toastr.success('Message sent successfully', 'Success');

        },
        error: (error: any) => {
          this.toastr.error('Something went wrong', error.error.message);
          this.isFormSubmitted = false;
        },
        complete: () => {
          this.form.reset();
          this.isFormSubmitted = true; // Reset the flag when the request is complete
        }
      });
    } else {
      this.toastr.error('Please fill the form first!', 'Error');
    }
  }


  get email() {
    return this.form.get('email')
  }
  get name() {
    return this.form.get('name')
  }
  get subject() {
    return this.form.get('subject')
  }
  get phone() {
    return this.form.get('phone')
  }
  get text() {
    return this.form.get('text')
  }
}
