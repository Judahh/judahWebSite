import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelSubDivisor } from './ModelSubDivisor';

import { Utils } from './../../../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentSubDivisor implements OnInit {
  @Input() modelSubDivisor: ModelSubDivisor;
  @Input() dataModel: Array<any>;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

  padding(){
    if(this.modelSubDivisor.arrayPadding==null||this.modelSubDivisor.arrayPadding==undefined){
      return "";
    }

    let stringPadding:string="";
    
    for(let index:number=0;index<this.modelSubDivisor.arrayPadding.length;index++){
      if(index==0){
        stringPadding+="padding:";
      }

      stringPadding+=" "+(this.modelSubDivisor.arrayPadding[index]+"px");

      if(index==this.modelSubDivisor.arrayPadding.length-1){
        stringPadding+=";";
      }
    }

    return stringPadding;
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
    return (this.modelSubDivisor.item!=null && 
    this.modelSubDivisor.item!=undefined && 
    this.modelSubDivisor.item.routerLinkActive=='active');
  }

  isItemInactive(){
    return (this.modelSubDivisor.item!=null && 
    this.modelSubDivisor.item!=undefined && 
    this.modelSubDivisor.item.routerLinkActive=='inactive');
  }

  isImage(){
    return (this.modelSubDivisor.image!=null && 
    this.modelSubDivisor.image!=undefined);
  }

  isVideoLink(){
    return (this.modelSubDivisor.videoLink!=null && 
    this.modelSubDivisor.videoLink!=undefined);
  }

  isBasicForm(){
    return (this.modelSubDivisor.basicForm!=null && 
    this.modelSubDivisor.basicForm!=undefined);
  }

  isInputData(){
    return (this.modelSubDivisor.inputData!=null && 
    this.modelSubDivisor.inputData!=undefined);
  }

  // width(){
  //   if(this.modelSubDivisor.width==null||this.modelSubDivisor.width==undefined||this.modelSubDivisor.width==""){
  //     return "";
  //   }
  //   return "width: "+this.modelSubDivisor.width+";";
  // }

  style(){
    if(this.modelSubDivisor.toBottom){
      return this.position()+this.bottom()+this.float()+this.padding()+this.boxSizing();
    }
    return this.float()+this.padding()+this.boxSizing();
  }

}