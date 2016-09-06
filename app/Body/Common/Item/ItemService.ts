import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemService {
  constructor(private http: Http) { }

  get(path:string,name:string) {
    return this.http.get('App/Body/'+path+'/'+name+'.json').map((res: Response) => res.json());
  }
}
