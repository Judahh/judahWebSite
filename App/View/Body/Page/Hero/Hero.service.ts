import { Injectable } from '@angular/core';

//import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  //constructor(private http: Http) { }

  getHeroes() {
    //return this.http.get('app/Body/Page/Heroes.json')
    //  .map((res: Response) => res.json());

    return [
      { 'id': 11, 'name': 'Chewbacca' },
      { 'id': 12, 'name': 'Rey' },
      { 'id': 13, 'name': 'Finn (FN2187)' },
      { 'id': 14, 'name': 'Han Solo' },
      { 'id': 15, 'name': 'Leia Organa' }
    ];

  }
}
