import { Component, ElementRef } from '@angular/core';

export class NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  isLoginFormShown = false;
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
    private eltRef: ElementRef
  ) {
    this.loginElt = this.eltRef;
    this.loginFormElt = this.eltRef;
  }

  private findAncestor(el: any, cls: String) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) {};  // Linter: "while statements must be braces" what does it mean?
    return el;
  }

  HideLoginForm(val: boolean) {
    this.isLoginFormShown = val;
  }
  
  showLoginForm(e: Event) {
    e.stopPropagation();
    this.loginElt.nativeElement = e.target;
    this.isLoginFormShown = true;
    // document.addEventListener('click', function() {
    // this.isLoginFormShown = false;
    // }.bind(this));
  }

  private hideLoginFormListener(e: Event) {
    e.stopPropagation();
    if (!this.findAncestor(e.target, 'login-form')) {
      this.isLoginFormShown = false;
      document.removeEventListener('click', this.hideLoginFormListener);
    }
  }
}
