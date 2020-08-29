import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getDateTimeAPI() {
    // Call the API and return the response (change the code below)
    let res: Response;

    return this.http.get('https://jsonmock.hackerrank.com/datetime')
  }
}
