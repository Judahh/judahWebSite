import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModelDivisor } from './ModelDivisor';

import { Utils } from './../../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisor implements OnInit {
  @Input() modelDivisor: ModelDivisor;
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

  opacity(){
    if(this.modelDivisor.opacity==null||this.modelDivisor.opacity==undefined){
      return "";
    }
    return "opacity: "+this.modelDivisor.opacity+";";
  }

  borderBottom(){
    if(this.modelDivisor.color==null||this.modelDivisor.color==""){
      return "";
    }
    return "border-bottom: solid "+this.modelDivisor.color+";";
  }

  display(){
    return "display: inherit;";
  }

  width(){
    return "width: inherit;";
  }

  subDivisorWidth(index:number){
    if(this.modelDivisor.arraySubDivisor.length==1 &&
     (this.modelDivisor.arraySubDivisor[0].item!=null &&
      this.modelDivisor.arraySubDivisor[0].item!=undefined)
      ){
      if(this.modelDivisor.arraySubDivisor[0].item.colorEffect.font.textAlign=="center")
        return "width: inherit;";
    }else{
      let width=this.modelDivisor.arraySubDivisor[index].width;
      if(width==null||width==undefined||width==""){
        return "";
      }
      return "width: "+width+";";
    }
  }

  subDivisorFloat(index:number){
    let float=this.modelDivisor.arraySubDivisor[index].float;
    if(float==null||float==undefined||float==""){
      return "";
    }
    return "float: "+float+";";
  }

  subDivisorStyle(index:number){
    return this.subDivisorFloat(index)+this.subDivisorWidth(index);
  }

  fontPadding(){
    if(this.modelDivisor.arrayPadding==null||this.modelDivisor.arrayPadding==undefined){
      return "";
    }

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

  boxSizing(){
    return "box-sizing: border-box;";
  }

  style(){
    return this.borderBottom()+this.display()+this.width()+this.boxSizing()+this.opacity();
  }

  style2(){
    return this.fontPadding()+this.display()+this.width()+this.boxSizing();
  }
}


