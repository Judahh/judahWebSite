// import { Injectable } from '@angular/core';
// import { Headers, Http, Response } from '@angular/http';
// import { Item } from './ItemModel';

// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';


// @Injectable()
export class ItemService {
  // private itemsUrl = 'App/items';
  
  // constructor(private http: Http) { }

  // public getFrom(path:string) {
  //   return this.http.get(path).map((response: Response) => response.json());
  // }

  // public get(path:string,name:string) {
  //   return this.http.get('App/Body/'+path+'/'+name+'.json').map((response: Response) => response.json());
  // }

  // getItems(): Promise<Item[]> {
  //   return this.http
  //     .get(this.itemsUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Item[])
  //     .catch(this.handleError);
  // }

  // save(item: Item,path:string,name:string): Promise<Item> {
  //   if (item.id) {
  //     return this.put(item,path,name);
  //   }
  //   return this.post(item,path,name);
  // }

  // delete(item: Item,path:string,name:string): Promise<Response> {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   let url = 'App/Body/'+path+'/'+name+'.json';

  //   return this.http
  //     .delete(url, { headers: headers })
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  // // Add new Hero
  // private post(item: Item,path:string,name:string): Promise<Item> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });

  //   let url = 'App/Body/'+path+'/'+name+'.json';

  //   return this.http
  //     .post(url, JSON.stringify(item), { headers: headers })
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // // Update existing Hero
  // private put(item: Item,path:string,name:string): Promise<Item> {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   let url = 'App/Body/'+path+'/'+name+'.json';

  //   return this.http
  //     .put(url, JSON.stringify(item), { headers: headers })
  //     .toPromise()
  //     .then(() => item)
  //     .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}
