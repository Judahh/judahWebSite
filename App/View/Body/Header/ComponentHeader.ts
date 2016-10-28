import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelItem } from '../Common/Item/ModelItem';
import { ModelMenuHorizontal } from '../Common/MenuHorizontal/ModelMenuHorizontal';
import { ModelMenuItems } from '../Common/ModelMenuItems';
import { ServiceJSON } from './../../../Core/Services/ServiceJSON';

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
  modelMenuHorizontals: ModelMenuHorizontal[];
  // itemsRight: ModelItem[];
  // itemsCenter: ModelItem[];
  // selectedItem: ModelItem;
  errorMessage: any;
  position: string;

  constructor(private serviceJSON: ServiceJSON) {
    this.initialization();
   }

  ngOnInit() {
    this.initialization();
  }

  initialization(){
    this.getItems();
  }

  getItems(){
    this.modelMenuHorizontals=[];
    this.errorMessage="";

    this.serviceJSON.getObservable('menuItems').subscribe(items => this.filter(items), error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }
  }

  filter(items:Array<ModelMenuItems>){
    for(var index:number=0;index<items.length;index++){
      if(items[index].name==Utils.getFileSelector(Utils.getFileName(__filename))){
        this.position=items[index].position;
        this.modelMenuHorizontals=items[index].menuHorizontal;
        return;
      }
    }
  }

  // addHero (name: string) {
  //   if (!name) { return; }
  //   this.heroService.addHero(name)
  //                    .subscribe(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }

  // onSelect(item: ModelItem){
  //   this.selectedItem = item;
  // }

}