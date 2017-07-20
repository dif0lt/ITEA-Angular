import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.styl']
})
export class UsersManagementComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // onSelect(usr: User) {
  //   this.selectedUser = usr;
  // }

  onSelect(user: User) {
    this.router.navigate([user.id], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
    this.userService.getUsers()
                    .then(
                      data => {
                        this.users = data;
                      }
                    )
  }
}
