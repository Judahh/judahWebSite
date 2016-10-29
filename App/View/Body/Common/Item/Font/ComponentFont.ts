import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../Core/Utils/Utils';
import { ModelItem } from '../ModelItem';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentFont implements OnInit{
  @Input() modelItem:ModelItem;
  cascadingStyleSheetsClass:string;
  cascadingStyleSheetsClassFontSize:string;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  fontWidth(){
    if(this.modelItem.width==null||this.modelItem.width==""){
      return "";
    }
    return "width: "+this.modelItem.width+";";
  }

  fontVerticalAlign(){
    if(this.modelItem.verticalAlign==null||this.modelItem.verticalAlign==""){
      return "";
    }
    return "vertical-align: "+this.modelItem.verticalAlign+";";
  }

  fontSize(){
    return "font-size: "+this.modelItem.size+"px;";
  }

  fontPadding(){
    let stringPadding:string="";
    for(let index:number=0;index<this.modelItem.padding.length;index++){
      if(index==0){
        stringPadding+="padding:";
      }

      stringPadding+=" "+(this.modelItem.padding[index]+"px");

      if(index==this.modelItem.padding.length-1){
        stringPadding+=";";
      }
    }

    return stringPadding;
  }

  style(){
    return this.fontSize() + this.fontPadding() + this.fontVerticalAlign() + this.fontWidth();
  }

  initialization(){
    if(this.modelItem.size==null||this.modelItem.size==undefined||this.modelItem.size.toString()==""){
      this.modelItem.size=40;  
    }

    if(this.modelItem.padding==null||this.modelItem.padding==undefined||this.modelItem.padding.toString()==""){
      this.modelItem.padding=[];  
      this.modelItem.padding.push(5);
    }

    switch(this.modelItem.font){
      case "icon":
        this.cascadingStyleSheetsClass="DivClassIcon";
      break;
      case "futuristicI":
        this.cascadingStyleSheetsClass="DivClassFuturisticI";
      break;
      case "futuristicII":
        this.cascadingStyleSheetsClass="DivClassFuturisticII";
      break;
    }
  }
}
