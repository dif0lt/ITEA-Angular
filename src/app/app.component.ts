import { Component, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';

import { AuthService } from './services/auth.service';

declare var jQuery: any;

export class NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent implements OnInit {
  isLoginFormShown = false;
  isLogedIn = false;
  loginElt: ElementRef;
  loginFormElt: ElementRef;
  eventElt: ElementRef;
  title = 'Angular ITEA';
  navItems: NavItem[] = [
    { name: 'Home', link: 'home' },
    { name: 'Catalog', link: 'catalog' },
    { name: 'Contact Us', link: 'contact-Us' },
    { name: 'Admin', link: 'admin'}
  ]

  constructor(
    private eltRef: ElementRef,
    public authService: AuthService,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    this.loginElt = this.eltRef;
    this.loginFormElt = this.eltRef;
    authService.isLoggedInChange.subscribe(value => this.isLogedIn = value);
  }

  hideLoginForm(val: boolean) {
    this.isLoginFormShown = val;
  }

  showLoginForm(e: Event) {
    e.stopPropagation();
    this.loginElt.nativeElement = e.target;
    this.isLoginFormShown = true;
  }

  logOut(e: Event) {
    this.authService.logOut();
    this.isLogedIn = false;
  }

  ngOnInit() {
    if (jQuery.cookie('user_id')) {
      const user = JSON.parse(jQuery.cookie('user_id'));
      this.authService.logIn(user.email, user.password)
                      .subscribe(user => this.isLogedIn = true);
    }
  }
}
