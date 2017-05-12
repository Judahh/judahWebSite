import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../../core/utils/Utils';
import { ModelFont } from './ModelFont';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentFont implements OnInit{
  @Input() modelFont:ModelFont;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  fontWidth(){
    if(this.modelFont.width==null||this.modelFont.width==""){
      return "";
    }
    return "width: "+this.modelFont.width+";";
  }

  fontTextIndent(){
    if(this.modelFont.textIndent==null||this.modelFont.textIndent==""){
      return "";
    }
    return "text-indent: "+this.modelFont.textIndent+";";
  }

  fontTextAlign(){
    if(this.modelFont.textAlign==null||this.modelFont.textAlign==""){
      return "";
    }
    return "text-align: "+this.modelFont.textAlign+";";
  }

  fontVerticalAlign(){
    if(this.modelFont.verticalAlign==null||this.modelFont.verticalAlign==""){
      return "";
    }
    return "vertical-align: "+this.modelFont.verticalAlign+";";
  }

  fontSize(){
    return "font-size: "+this.modelFont.size+"px;";
  }

  fontPadding(){
    if(this.modelFont.arrayPadding==null||this.modelFont.arrayPadding==undefined){
      return "";
    }

    let stringPadding:string="";
    for(let index:number=0;index<this.modelFont.arrayPadding.length;index++){
      if(index==0){
        stringPadding+="padding:";
      }

      stringPadding+=" "+(this.modelFont.arrayPadding[index]+"px");

      if(index==this.modelFont.arrayPadding.length-1){
        stringPadding+=";";
      }
    }

    return stringPadding;
  }

  fontMargin(){
    if(this.modelFont.arrayMargin==null||this.modelFont.arrayMargin==undefined){
      return "";
    }

    let stringMargin:string="";
    for(let index:number=0;index<this.modelFont.arrayMargin.length;index++){
      if(index==0){
        stringMargin+="margin:";
      }

      stringMargin+=" "+(this.modelFont.arrayMargin[index]+"px");

      if(index==this.modelFont.arrayMargin.length-1){
        stringMargin+=";";
      }
    }

    return stringMargin;
  }

  style(){
    return this.fontSize() + 
           this.fontPadding() + 
           this.fontMargin() + 
           this.fontVerticalAlign() + 
           this.fontTextAlign() + 
           this.fontTextIndent() +
           this.fontWidth();
  }

  initialization(){
  }
}
