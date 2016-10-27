import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelItem } from '../Common/Item/ModelItem';
import { ServiceJSON } from './../../../Core/Services/ServiceJSON';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Utils } from './../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ServiceJSON]
})

export class ComponentHeader implements OnInit {
  itemsLeft: ModelItem[];
  itemsRight: ModelItem[];
  itemsCenter: ModelItem[];
  selectedItem: ModelItem;
  errorMessage: any;
  position: string;

  constructor(private serviceJSON: ServiceJSON) {
    this.initialization();
   }

  ngOnInit() {
    this.initialization();
    this.getItems();
  }

  initialization(){
    this.position="top";
  }

  getItems(){
    this.itemsLeft=[];
    this.errorMessage="";

    // this.itemService.getItems('Header/Item','Left').then(items => this.itemsLeft = items).catch(error => this.errorMessage = error);
    // alert("Items:"+this.itemsLeft);
    // alert("Error:"+this.errorMessage);

    this.serviceJSON.get('items').subscribe(items => this.itemsLeft = items, error => this.errorMessage = <any>error);
    alert("Error:"+this.errorMessage);
    alert("Items:"+this.itemsLeft.length);

    //this.itemService.get('Header/Item','Left').subscribe(items => this.itemsLeft = items, error => this.errorMessage = <any>error);
    //alert("Error:"+this.errorMessage);
    //alert("Items:"+this.itemsLeft);
    
    //this.itemService.get('Header/Item','Right').subscribe(items => this.itemsRight = items);
    //this.itemService.get('Header/Item','Center').subscribe(items => this.itemsCenter = items);
  }

  // addHero (name: string) {
  //   if (!name) { return; }
  //   this.heroService.addHero(name)
  //                    .subscribe(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }

  onSelect(item: ModelItem){
    this.selectedItem = item;
  }

}