import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.styl']
})
export class UsersDetailsComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  changedUser: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  onChange(form: FormGroup) {
    this.changedUser = form.value;
  }

  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    this.changedUser = form.value;
    if (form.valid) {
    this.userService.editUser(this.changedUser)
                    .then(
                      () => this.user = this.changedUser
                    )
                    .catch(
                      e => console.error(e)
                    )
    }
  }

  onDelete() {
    confirm(`Are you sure that you want to delete user ${this.user.email}`)
    this.userService.deleteUser(this.user.id)
                    .then(
                      () => alert(`${this.user.email} deleted`)
                    )
                    .catch(
                      e => console.error(e)
                    )
    
  }  

  populateForm(user) {
    this.userForm = this.formBuilder.group({
      id: [this.user ? this.user.id : null],
      firstName: [this.user ? this.user.firstName : null, Validators.required],
      lastName: [this.user ? this.user.lastName : null, Validators.required],
      email: [this.user ? this.user.email : null, Validators.required],
      password: [this.user ? this.user.password : null, Validators.required],
      role: [this.user ? this.user.role : null, Validators.required],
    });
  }

  ngOnInit() {
  console.log('CategoryComponentInit')
  this.activatedRoute.params.forEach(params => {
    const id: number = params['id'];
    this.userService.getUserById(id)
                    .then(
                      user => {
                        this.user = user;
                        this.populateForm(user);
                        this.changedUser = user;
                      },
                      error => console.error(error),
                      
                    )
  })
  this.userForm = this.formBuilder.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required],
  });
  }

  canDeactivate() {
    if (!this.user || this.user === this.changedUser) {
      return true;
    }

    return confirm('Discard changes?');
  }
}
