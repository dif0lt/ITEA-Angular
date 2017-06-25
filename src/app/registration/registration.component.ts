import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isFormSubmitted: boolean = false;
  users: User[];
  userForm: FormGroup;
  REG_EXP: any = /[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}/;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsTouched();
  }

  onSubmit(e: Event, form: FormGroup) {
    this.isFormSubmitted = true;
    e.preventDefault();
    this.userForm.controls['username'].markAsUntouched();
    this.userForm.controls['email'].markAsUntouched();
    this.userForm.controls['password'].markAsUntouched();

    if (this.userForm.valid) {
      const user: User = form.value;
      this.userService.addUser(user);
      // console.log('*****you call addUser with:')
      // console.log(user)
      // console.log('*****')

      this.userForm.reset();
      this.isFormSubmitted = false;
    }
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [null],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.REG_EXP)]],
      password: [null]
    });
  }

}
