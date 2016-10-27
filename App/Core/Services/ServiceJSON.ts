import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceJSON {
  private URL = '/API/';
  
  constructor(private http: Http) { }

  get(path:string): Observable<any>  {
    return this.http.get(this.URL+path).map(this.extractData).catch(this.handleError);
  }

  add(name: string, path:string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.URL, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
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
