import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; //

import { RegExpCommon } from '../common/regexp.common';

import { AuthService } from '../services/auth.service';

import { User } from "../models/user";

@Component({
    selector: 'app-authorization',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.styl']
})

export class AuthorizationComponent implements OnInit {
  @Output() onLoginFormHide = new EventEmitter<boolean>();

  public elementRef;

  authorizationForm: FormGroup;
  loginForm: Element;
  email: string;
  password: string;
  user: User;

  constructor(
      private formBuilder: FormBuilder,
      public authService: AuthService,
      public router: Router,
      myElement: ElementRef
  ) {
    this.elementRef = myElement;
  }

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.hideLoginForm()
    }
  }

  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    let email = form.controls['email'].value;
    let password = form.controls['password'].value;
    if (form.valid) {
      this.authService.logIn(email, password)
                      .subscribe(
                        user => {
                          this.user = user;
                          if (this.authService.isLoggedIn) {
                          // let redirect = this.authService.redirectUrl ?
                          // this.authService.redirectUrl : '/admin';
                          // this.router.navigate([redirect]);
                          this.hideLoginForm();
                          }
                        }
                      )
    }
  }

  hideLoginForm() {
    this.onLoginFormHide.emit(false);
  }

  ngOnInit() {
    this.authorizationForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
        password: [null, [Validators.required]]
    });
  }
}
