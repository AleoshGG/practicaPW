import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrl: './home-p.component.css',
})
export class HomePComponent implements OnInit {
  constructor(private _user: UsersService, private router: Router) {}

  ngOnInit(): void {
    const numberUsers = this._user.validateUser();

    if (numberUsers == 0) {
      this.router.navigate(['/signIn']);
    }
  }
}
