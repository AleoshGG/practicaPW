import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { iUser } from '../models/iUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _users: UsersService,
    private router: Router
  ) {
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
    this._users.checkUser(this.myForm.get('userName')?.value);
    this.router.navigate(['/']);
  }
}
