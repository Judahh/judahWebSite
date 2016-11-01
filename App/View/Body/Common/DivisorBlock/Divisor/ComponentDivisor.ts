import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModelDivisor } from './ModelDivisor';

import { Utils } from './../../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisor implements OnInit {
  @Input() modelDivisor: ModelDivisor;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

  borderBottom(){
    return "border-bottom: solid "+this.modelDivisor.color+";";
  }

  display(){
    return "display: inherit;";
  }

  width(){
    return "width: inherit;";
  }

  subDivisorWidth(){
    if(this.modelDivisor.arraySubDivisor.length==1){
      if(this.modelDivisor.arraySubDivisor[0].item.colorEffect.font.textAlign=="center")
        return "width: inherit;";
    }else{
      return "";
    }
  }

  fontPadding(){
    let stringPadding:string="";
    for(let index:number=0;index<this.modelDivisor.arrayPadding.length;index++){
      if(index==0){
        stringPadding+="padding:";
      }

      stringPadding+=" "+(this.modelDivisor.arrayPadding[index]+"px");

      if(index==this.modelDivisor.arrayPadding.length-1){
        stringPadding+=";";
      }
    }

    return stringPadding;
  }

  style(){
    return this.borderBottom()+this.display()+this.width();
  }

  style2(){
    return this.fontPadding()+this.display()+this.width();
  }
}


