import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ServiceJSON {
  private URL = '/API/JSON/';
  
  constructor(private http: Http) { }

  getPromise(path:string): Promise<any>  {
    return this.http.get(this.URL+path+".json").toPromise().then(this.extractData).catch(this.handlePromiseError);
  }

  getObservable(path:string): Observable<any>  {
    return this.http.get(this.URL+path+".json").map(this.extractData).catch(this.handleObservableError);
  }

  add(name: string, path:string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.URL, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleObservableError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body;
  }

  private handleObservableError (error: Response | any) {
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

  private handlePromiseError (error: Response | any) {
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
    return Promise.reject(errMsg);
  }
}
