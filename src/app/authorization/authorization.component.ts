import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegExpCommon } from '../common/regexp.common'

@Component({
    selector: 'app-autorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.styl']  
})

export class AuthorizationComponent implements OnInit {

  authorizationForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
      this.authorizationForm = this.formBuilder.group({
          email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
          password: [null, [Validators.required]]
      });
  }
}