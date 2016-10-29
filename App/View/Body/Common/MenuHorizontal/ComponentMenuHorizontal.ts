import { Component, Input, OnInit, ViewEncapsulation, ViewChildren, QueryList, forwardRef } from '@angular/core';

import {ComponentItem} from './../Item/ComponentItem';
import {HTMLGenerator} from './../../../../Core/HTMLGenerator/HTMLGenerator';

import { ModelItem } from './../Item/ModelItem';
import { ModelMenuHorizontal } from './ModelMenuHorizontal';
import { ModelMenuItems } from './../ModelMenuItems';
import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ServiceJSON]
})
export class ComponentMenuHorizontal implements OnInit{
  @Input() class: string;
  @Input() position: string;
  @Input() id: number;
  items: Array<ModelItem>;
  errorMessage: any;
  
  constructor(private serviceJSON: ServiceJSON){}

  ngOnInit() {
    this.initialization();  
  }

  ngAfterContentInit() {
      //console.log(this.itemsQ.length);
  }

  getItems(){
    this.items=[];
    this.errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/menuItems').subscribe(items => this.filter(items), error => this.errorMessage = <any>error);
    
    // this.stateCtrl = new Control();
    // this.stateCtrl.valueChanges.subscribe(
    //   data => {
    //     this.itemsQ._results.forEach(child => {
    //       child.state = data;
    //     });
    //   });
    //this.itemsQ.changes.subscribe(items => alert(items), error => this.errorMessage = <any>error);

    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }
  }

  ngAfterViewInit() {
  }

  private filter(items:Array<ModelMenuItems>){
    for(var index:number=0;index<items.length;index++){
      if(items[index].position==this.position){
        var modelMenuHorizontals:Array<ModelMenuHorizontal>=items[index].menuHorizontal;
        for(var index2:number=0;index2<modelMenuHorizontals.length;index2++){
          if(modelMenuHorizontals[index2].id==this.id){
            this.items=modelMenuHorizontals[index2].item;
            return;
          }
        }
      }
    }
  }

  private initialization(){
    this.getItems();
  }
}