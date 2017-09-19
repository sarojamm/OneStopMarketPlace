import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {DepartmentModel} from './department.model';

@Injectable()
export class DepartmentService {

  constructor( private http: Http) { }

  getdata( url): Promise<DepartmentModel[]> {
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');

    // return this._http.get(this.apiRoot + "symbol=" + symbol + "&type=daily&startDate=20150311000000", {headers: headers})
    //   .map(response => response.json());


    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET');
    // this.http.get(url , {headers: headers})


    // let headers = new Headers({ 'Access-Control-Allow-Origin': '*' })
    //                .append('Access-Control-Allow-Methods', 'GET');

    const options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .toPromise()
      .then(response => response.json() as DepartmentModel[])
      .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
