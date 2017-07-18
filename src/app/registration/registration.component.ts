import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { RegExpCommon } from '../common/regexp.common'

import { User } from '../models/user'

import { UserService } from '../services/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  showSuccessMessage = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    this.user = form.value;
    if (form.valid) {
    this.userService.registerUser(this.user)
                    .then(
                      () => this.showSuccessMessage = true
                    )
                    .catch(
                      e => console.error(e)
                    )
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
      role: ["user"],
      password: [null, [Validators.required, Validators.pattern(RegExpCommon.PASS)]]
    });
  }
}
