import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelSubDivisor } from './ModelSubDivisor';

import { Utils } from './../../../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentSubDivisor implements OnInit {
  @Input() modelSubDivisor: ModelSubDivisor;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

  margin(){
    if(this.modelSubDivisor.arrayMargin==null||this.modelSubDivisor.arrayMargin==undefined){
      return "";
    }

    let stringMargin:string="";
    
    for(let index:number=0;index<this.modelSubDivisor.arrayMargin.length;index++){
      if(index==0){
        stringMargin+="margin:";
      }

      stringMargin+=" "+(this.modelSubDivisor.arrayMargin[index]+"px");

      if(index==this.modelSubDivisor.arrayMargin.length-1){
        stringMargin+=";";
      }
    }

    return stringMargin;
  }

  float(){
    if(this.modelSubDivisor.float==null||this.modelSubDivisor.float==""){
      return "";
    }
    return "float: "+this.modelSubDivisor.float+";";
  }

  position(){
    return "position: absolute;";
  }

  bottom(){
    return "bottom: 0px;";
  }

  boxSizing(){
    return "box-sizing: border-box;";
  }

  isItemActive(){
    return this.modelSubDivisor.item!=null && 
    this.modelSubDivisor.item!=undefined && 
    this.modelSubDivisor.item.routerLinkActive=='active';
  }

  isItemInactive(){
    return this.modelSubDivisor.item!=null && 
    this.modelSubDivisor.item!=undefined && 
    this.modelSubDivisor.item.routerLinkActive=='inactive';
  }

  isImage(){
    return this.modelSubDivisor.image!=null && 
    this.modelSubDivisor.image!=undefined;
  }

  style(){
    if(this.modelSubDivisor.toBottom){
      return this.position()+this.bottom()+this.float()+this.margin()+this.boxSizing();
    }
    return this.float()+this.margin()+this.boxSizing();
  }

}