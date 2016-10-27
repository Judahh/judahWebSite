import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelItem } from '../Common/Item/ModelItem';
import { ItemService } from './../../../Core/Services/ItemService';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Utils } from './../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ItemService]
})

export class ComponentHeader implements OnInit {
  itemsLeft: ModelItem[];
  itemsRight: ModelItem[];
  itemsCenter: ModelItem[];
  selectedItem: ModelItem;
  errorMessage: any;
  position: string;

  constructor(private itemService: ItemService) {
    this.initialization();
   }

  ngOnInit() {
    this.initialization();
  }

  initialization(){
    this.getItems();
    this.position="top";
  }

  getItems(){
    this.itemsLeft=[];
    this.errorMessage="";

    this.itemService.getItems('Header/Item','Left').then(items => this.itemsLeft = items).catch(error => this.errorMessage = error);
    alert("Items:"+this.itemsLeft);
    alert("Error:"+this.errorMessage);
    //this.itemService.get('Header/Item','Left').subscribe(items => this.itemsLeft = items, error => this.errorMessage = <any>error);
    //alert(this.errorMessage);
    //alert("Items:"+this.itemsLeft);
    
    //this.itemService.get('Header/Item','Right').subscribe(items => this.itemsRight = items);
    //this.itemService.get('Header/Item','Center').subscribe(items => this.itemsCenter = items);
  }

  onSelect(item: ModelItem){
    this.selectedItem = item;
  }

}