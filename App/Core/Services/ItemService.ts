import { Injectable } from '@angular/core';
import { Headers, Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { ModelItem } from './../../View/Body/Common/Item/ModelItem';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
  private itemsUrl = 'App/View/Body/';
  
  constructor(private http: Http) { }

  getFrom(path:string) {
    return this.http.get(path).map((response: Response) => response.json());
  }

  get(path:string,name:string) {
    //alert(this.itemsUrl+path+'/'+name+'.json');
    return this.http.get(this.itemsUrl+path+'/'+name+'.json').map((response: Response) => response.json());
  }

  getItems(path:string,name:string): Promise<ModelItem[]> {
    return this.http
      .get('App/items')
      .toPromise()
      .then(response => response.json().data as ModelItem[])
      .catch(this.handleError);
  }

  save(item: ModelItem,path:string,name:string): Promise<ModelItem> {
    if (item.id) {
      return this.put(item,path,name);
    }
    return this.post(item,path,name);
  }

  delete(item: ModelItem,path:string,name:string): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = this.itemsUrl+path+'/'+name+'.json';

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Hero
  private post(item: ModelItem,path:string,name:string): Promise<ModelItem> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = this.itemsUrl+path+'/'+name+'.json';

    return this.http
      .post(url, JSON.stringify(item), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(item: ModelItem,path:string,name:string): Promise<ModelItem> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = this.itemsUrl+path+'/'+name+'.json';

    return this.http
      .put(url, JSON.stringify(item), { headers: headers })
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
