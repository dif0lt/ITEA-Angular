import { Component, OnInit } from '@angular/core';

import { Animations } from "../common/animations.common";
import { UserService } from '../services/user.service'
import { User } from '../models/user'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  animations: [Animations.FLY_IN_OUT, Animations.USER_STATE]
})
export class HomeComponent implements OnInit {
  isFormSubmitted = false;
  users: User[];
  selectedUser: User;
  REG_EXP: any = /[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}/;
  stateOfUser: string;

  constructor(
    private userService: UserService
  ) {}

  onSelect(usr: User) {
    this.selectedUser = usr;
    this.toggleState();
  }

  toggleState() {
    (this.selectedUser.state === 'new' || this.selectedUser.state === 'inactive') ?
      this.selectedUser.state = 'active' : this.selectedUser.state = 'inactive'
  }

  ngOnInit(): void {
    this.userService.getUsers()
                    .then(
                      data => {
                        this.users = data;
                        this.users.forEach(user => user.state = 'inactive')
                      }
                    )
  }

}
