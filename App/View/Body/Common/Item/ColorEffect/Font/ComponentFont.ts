import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../../Core/Utils/Utils';
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

  style(){
    return this.fontSize() + this.fontPadding() + this.fontVerticalAlign() + this.fontWidth();
  }

  initialization(){
  }
}
