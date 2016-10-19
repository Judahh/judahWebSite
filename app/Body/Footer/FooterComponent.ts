import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Item } from '../Common/Item/ItemModel';
//import { ItemService } from '../Common/Item/ItemService';

@Component({
  moduleId: module.id,
  selector: 'footer',
  styleUrls: ['FooterComponent.css'],
  templateUrl: 'FooterComponent.html',
  encapsulation: ViewEncapsulation.None//,
  //providers: [ItemService]//,
  //directives:[Router]
})
export class FooterComponent implements OnInit {

  itemsLeft: Item[];
  itemsRight: Item[];
  itemsCenter: Item[];
  selectedItem: Item;
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
    this.position="bottom";
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

  onSelect(item: Item){
    this.selectedItem = item;
  }
}


