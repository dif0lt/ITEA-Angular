import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; //

import { RegExpCommon } from '../common/regexp.common';
import { AuthService } from '../services/auth.service'; //

import { User } from "../models/user";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.styl']
})

// export class AuthorizationComponent implements OnInit {
//   @Output() onLoginFormHide = new EventEmitter<boolean>();

//   authorizationForm: FormGroup;
//   loginForm: Element;

//   constructor(
//       private formBuilder: FormBuilder
//   ) {}

//   hideLoginForm = function() {
//     document.removeEventListener('click', this.hideLoginForm);
//     this.onLoginFormHide.emit(false);
//   }.bind(this)

//   ngOnInit() {
//       this.authorizationForm = this.formBuilder.group({
//           email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
//           password: [null, [Validators.required]]
//       });
//       this.loginForm = document.querySelector('.login-form');
//       document.addEventListener('click', this.hideLoginForm);
//       this.loginForm.addEventListener('click', function(e){e.stopPropagation()})
//   }
// }

export class AuthorizationComponent {
message: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  logIn() {
    this.message ='Logginng in...'
    this.authService.logIn().subscribe(
      () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ?
          this.authService.redirectUrl : '/admin';

          this.router.navigate([redirect]);
        }
      }
    )
  }

  logOut() {
    this.authService.logOut();
  }

  setMessage() {
    this.message = `You are logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }
}
