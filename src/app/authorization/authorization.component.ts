import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegExpCommon } from '../common/regexp.common'

import { User } from "../models/user";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.styl']
})

export class AuthorizationComponent implements OnInit {
  @Output() onLoginFormHide = new EventEmitter<boolean>();

  authorizationForm: FormGroup;
  loginForm: Element;

  constructor(
      private formBuilder: FormBuilder
  ) {}

  hideLoginForm = function() {
    document.removeEventListener('click', this.hideLoginForm);
    this.onLoginFormHide.emit(false);
  }.bind(this)

  ngOnInit() {
      this.authorizationForm = this.formBuilder.group({
          email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
          password: [null, [Validators.required]]
      });
      this.loginForm = document.querySelector('.login-form');
      document.addEventListener('click', this.hideLoginForm);
      this.loginForm.addEventListener('click', function(e){e.stopPropagation()})
  }
}
