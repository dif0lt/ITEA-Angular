import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  DOMAIN = 'http://localhost:3000'

  private headers: Headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(
    private http: Http,
   ) {}
 
  getUsers(): Promise<User[]> {
    const URL = `${this.DOMAIN}/api/user`;
    return this.http.get(URL)
               .toPromise()
               .then(
                 response => response.json() as User[]
               )
               .catch(
                 err => this.errorHandler(err)
               );
  }

  registerUser(data: User): Promise<User> {
    const URL = `${this.DOMAIN}/api/user`;
    return this.http.post(URL, data, this.headers)
               .toPromise()
               .then(
                 response => response.json() as User
               )
               .catch(
                 err => this.errorHandler(err)
               )
  }

  private errorHandler(err: Error) {
    console.log(err);
    console.log('alarm--Ahtung--caput');
  }
}
