import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Item } from '../Common/Item/ItemModel';
import { ItemService } from '../Common/Item/ItemService';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header',
  styleUrls: ['HeaderComponent.css'],
  templateUrl: 'HeaderComponent.html',
  encapsulation: ViewEncapsulation.None//,
  //providers: [ItemService]//,
  //directives:[Router]
})

export class HeaderComponent implements OnInit {
  itemsLeft: Item[];
  itemsRight: Item[];
  itemsCenter: Item[];
  selectedItem: Item;
  public string='';
  error: any;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    //this.getItems();
  }

  getItems(){
     //this.itemService.getItems().then(items => this.itemsLeft = items).catch(error => this.error = error);
    //alert("Items:"+this.itemsLeft);
    //alert(error);
    this.itemService.get('Header/Item','Left').subscribe(items => this.itemsLeft = items);
    //alert("Items:"+this.itemsLeft);
    //this.itemService.get('Header/Item','Right').subscribe(items => this.itemsRight = items);
    //this.itemService.get('Header/Item','Center').subscribe(items => this.itemsCenter = items);
  }

  onSelect(item: Item){
    this.selectedItem = item;
  }

}