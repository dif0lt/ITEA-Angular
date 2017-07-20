import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { LinksCommon } from '../common/links.common';
import { User } from '../models/user';

declare var jQuery: any;

@Injectable()
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  redirectUrl: string;
  isLoggedInChange: Subject<boolean> = new Subject<boolean>();

  private endpoint = `${LinksCommon.ENDPOINT}login`;

  constructor(
    private http: Http
  ) {}

  logIn(email: string, password: string): Observable<User> {
    const URL = `${this.endpoint}/${email}/${password}`;
    return this.http.get(URL)
                    .map(
                      response => {
                        if (response['_body'] !== '') {
                          this.ChangeLoginState(true);
                          this.isLoggedIn = true;
                          const ret = response.json() as User
                          jQuery.cookie('user_id', JSON.stringify(
                            {id: `${ret.id}`, email: `${ret.email}`, password: `${ret.password}`}), {expires: 7, path: '/'}
                          );
                          ret.role == 'admin' ? this.isAdmin = true : this.isAdmin = false;
                          console.log(this.isAdmin)
                          return ret
                        } else {
                          alert('There is no such user or password is incorrect');
                        }
                      })
                    .catch(
                      error => this.errorHandler(error)
                    )
  }

  logOut(): void {
    this.ChangeLoginState(false);
    this.isAdmin = false;
    jQuery.removeCookie('user_id');
    console.log(this.isAdmin)
  }

  ChangeLoginState(state: boolean) {
    this.isLoggedInChange.next(state);
  }

  private errorHandler(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
