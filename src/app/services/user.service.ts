import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LinksCommon } from '../common/links.common';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private endpoint = `${LinksCommon.ENDPOINT}user/`;
  private headers: Headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(
    private http: Http,
   ) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.endpoint)
                    .toPromise()
                    .then(
                      response => response.json() as User[]
                    )
                    .catch(
                      err => this.errorHandler(err)
                    );
  }

  getUserById(id: number): Promise<User> {
    const URL = `${this.endpoint}${id}`;
    return this.http.get(URL)
                    .toPromise()
                    .then(
                      response => response.json() as User
                    )
                    .catch(
                      err => this.errorHandler(err)
                    )
    }

  registerUser(data: User): Promise<User> {
    return this.http.post(this.endpoint, data, this.headers)
                    .toPromise()
                    .then(
                      response => response.json() as User
                    )
                    .catch(
                      err => this.errorHandler(err)
                    )
  }

  deleteUser(id: number): Promise<any> {
    const URL = `${this.endpoint}${id}`;
    return this.http.delete(URL)
                    .toPromise()
                    .then(
                      response => response.json()
                    )
                    .catch(
                      error => this.errorHandler(error)
                    )
    }

  editUser(user: User): Promise<User> {
    const URL = `${this.endpoint}${user.id}`;
    return this.http.put(URL, user)
                    .toPromise()
                    .then(
                      response => response.json() as User
                    )
                    .catch(
                      error => this.errorHandler(error)
                    )
    }


  private errorHandler(err: Error) {
    console.log(err);
    return null;
  }
}
