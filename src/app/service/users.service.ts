import { Injectable } from '@angular/core';
import { iUser } from '../models/iUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: iUser[] = [];
  private count: number = 1;
  constructor() {}

  checkUser(userCheck: string): void {
    let flag: boolean = true;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === userCheck) {
        localStorage.setItem('user_id', this.users[i].id.toString());
        flag = false;
        i = this.users.length;
      }
    }

    if (flag) {
      this.addUser(userCheck);
    }
  }

  addUser(user: string): void {
    const newUser: iUser = {
      id: this.count,
      name: user,
    };
    this.users.push(newUser);
    this.count++;
    localStorage.setItem('user_id', newUser.id.toString());
  }

  validateUser(): number {
    return this.users.length;
  }
}
