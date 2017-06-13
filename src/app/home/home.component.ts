import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navItems: Array<string> = ['Home', 'Shop', 'Some'];
  users: User[];
  x: number = 5;
  foo: Array<any> = ['John', 'James', 'Jack', 'Mike', 'Piter']
  inpV: any;
  size: string = `${this.inpV}px`;

  constructor(
    private userService: UserService
  ) { }

  onClick(e: Event) {
    this.size = '48px';
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
