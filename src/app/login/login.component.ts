import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)],
      ],
    });
  }

  get userName() {
    return this.myForm.get('userName');
  }

  registerUser() {
    console.log(this.myForm.get('userName')?.value);
  }
}
