import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegExpCommon } from '../common/regexp.common'
import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent implements OnInit {
  isFormSubmitted = false;
  showSuccessMessage = false;
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  clearControlValidation(name: string) {
    this.registrationForm.controls[name].markAsTouched();
  }

  onSubmit(e: Event, form: FormGroup) {
    this.isFormSubmitted = true;
    e.preventDefault();
    this.registrationForm.controls['firstName'].markAsUntouched();
    this.registrationForm.controls['lastName'].markAsUntouched();
    this.registrationForm.controls['email'].markAsUntouched();
    this.registrationForm.controls['password'].markAsUntouched();

    if (this.registrationForm.valid) {
      const user: User = form.value;
      this.userService.addUser(user);
      console.log('*****you call addUser with:')
      console.log(user)
      console.log('*****')

      this.registrationForm.reset();
      this.isFormSubmitted = false;
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
      password: [null, [Validators.required, Validators.pattern(RegExpCommon.PASS)]]
    });
  }

}
