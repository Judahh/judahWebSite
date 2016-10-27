import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class FontComponent implements OnInit{
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() verticalAlign: string;
  @Input() width: string;
  @Input() size: number;
  @Input() padding: number[];
  @Input() info: string;
  cascadingStyleSheetsClass:string;
  cascadingStyleSheetsClassFontSize:string;

  public constructor(){
    this.initialization(); 
  }

  ngOnInit() {
    this.initialization();  
  }

  fontWidth(){
    if(this.width==null){
      return "";
    }
    return "vertical-align: "+this.width+";";
  }

  fontVerticalAlign(){
    if(this.verticalAlign==null){
      return "";
    }
    return "vertical-align: "+this.verticalAlign+";";
  }

  fontSize(){
    return "font-size: "+this.size+"px;";
  }

  fontPadding(){
    let stringPadding:string=""

    for(let index:number=0;index<this.padding.length;index++){
      if(index==0){
        stringPadding+="padding: ";
      }

      stringPadding+=(this.padding[index]+"px");

      if(index==this.padding.length-1){
        stringPadding+=";";
      }
    }

    return stringPadding;
  }

  style(){
    return this.fontSize() + this.fontPadding() + this.fontVerticalAlign() + this.fontWidth();
  }

  initialization(){
    if(this.size==null){
      this.size=40;  
    }

    if(this.padding==null){
      this.padding=[];  
      this.padding.push(5);
    }

    switch(this.font){
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
