import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelItem } from '../Common/Item/ModelItem';
//import { ItemService } from '../Common/Item/ItemService';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Utils } from './../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentHeader implements OnInit {
  itemsLeft: ModelItem[];
  itemsRight: ModelItem[];
  itemsCenter: ModelItem[];
  selectedItem: ModelItem;
  error: any;
  position: string;

  constructor() {
    this.initialization();
   }

  ngOnInit() {
    //this.getItems();
    this.initialization();
  }

  initialization(){
    this.position="top";
  }

  getItems(){
     //this.itemService.getItems().then(items => this.itemsLeft = items).catch(error => this.error = error);
    //alert("Items:"+this.itemsLeft);
    //alert(error);
    //this.itemService.get('Header/Item','Left').subscribe(items => this.itemsLeft = items);
    //alert("Items:"+this.itemsLeft);
    //this.itemService.get('Header/Item','Right').subscribe(items => this.itemsRight = items);
    //this.itemService.get('Header/Item','Center').subscribe(items => this.itemsCenter = items);
  }

  onSelect(item: ModelItem){
    this.selectedItem = item;
  }

}