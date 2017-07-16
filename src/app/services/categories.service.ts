import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Category } from '../models/category'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

  DOMAIN = 'http://localhost:3000'

  private headers: Headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(
    private http: Http,
   ) {}
 
  getCategories(): Observable<Category[]> {
    console.log('getCategoriesInit')
    const URL = `${this.DOMAIN}/api/category`;
    return this.http.get(URL)
                    .map(response => response.json() as Category[])
                    .catch(this.errorHandler)
  }

  getCategoryById(id: any): Observable<Category> {
    console.log('getCategoriesByIdInit')
    const URL = `${this.DOMAIN}/api/category/${id}`;
    return this.http.get(URL)
                    .map(response => response.json() as Category)
                    .catch(this.errorHandler)  
  }

  updateCategory(id: any, data: Category) {
    console.log('updateCategoryInit')
    const URL = `${this.DOMAIN}/api/category/${id}`;
    return this.http.post(URL, data, this.headers)
               .toPromise()
               .then(
                 response => response.json() as Category
               )
               .catch(
                 err => this.errorHandler(err)
               )
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
