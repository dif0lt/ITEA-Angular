import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  navItems: Array<string> = ['Home', 'Shop', 'Some'];
  users: User[];
  x: number = 5;
  foo: Array<any> = ['John', 'James', 'Jack', 'Mike', 'Piter']
  inpV: any;
  size: string = `${this.inpV}px`;

  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.getUsers();
  }

  onSubmit(e: Event, form: NgForm) {
    e.preventDefault();
    this.userService.addUser(form.controls["firstName"].value, form.controls["lastName"].value, form.controls["email"].value, form.controls["age"].value);
  }
}
