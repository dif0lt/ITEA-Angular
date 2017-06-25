import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
   ) {}

  getUsers(): Promise<User[]> {
    const URL = './assets/users.json';
    return this.http.get(URL)
               .toPromise()
               .then(
                 response => response.json() as User[]
               )
               .catch(
                 err => this.errorHandler(err)
               );
  }

  addUser(data: User): Promise<User> {
    const URL = 'api/addUser';
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
  }

  private headers: Headers = new Headers({ 'Content-Type': 'application/json'});
}
