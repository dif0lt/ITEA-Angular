import { Injectable } from '@angular/core';
import { 
	CanActivate,
	CanActivateChild,
	CanLoad,
	Router,
	Route,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
	constructor(
    private authService: AuthService,
    private router: Router,
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		console.log('AuthGuardServiceInit');
		let url: string = state.url;
		return this.checkLogin(url);
	}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  canLoad(route: Route) {
    let url = `${route.path}`;
    return this.checkLogin(url)
  }

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) {
			return true;
		}

		this.authService.redirectUrl = url;
		this.router.navigate(['/home']);
		return false;
	}
}