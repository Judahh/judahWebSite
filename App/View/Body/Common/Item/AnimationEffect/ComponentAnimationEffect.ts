import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentAnimationEffect implements OnInit{
  @Input() animationEffect: string;
  @Input() info: string;
  cascadingStyleSheetsClass:string;
  cascadingStyleSheetsSubClass:string;
  cascadingStyleSheetsSubClasses:Array<string>;

  public constructor(){
    this.initialization(); 
  }

  ngOnInit() {
    this.initialization();  
  }

  isComma(value:any){
    return value==',';
  }

  elements(){
    let array:Array<number>=new Array<number>();
    for(let index=0; index< this.info.length; index++){
      array.push(index);
    }
    return array;
  }

  initialization(){
    this.cascadingStyleSheetsClass="";
    this.cascadingStyleSheetsSubClass="";
    this.cascadingStyleSheetsSubClasses=new Array<string>();
    
    switch(this.animationEffect){
      case "pulse":
        this.cascadingStyleSheetsClass="DivClassPulse";
      break;

      case "shake":
        this.cascadingStyleSheetsClass="DivClassShake";
      break;

      case "spin":
        this.cascadingStyleSheetsClass="DivClassSpin";  
      break;

      case "spin2":
        this.cascadingStyleSheetsClass="DivClassSpin2";  
      break;

      case "handIcon":
        this.cascadingStyleSheetsClass="DivClassShake";
        this.cascadingStyleSheetsSubClass="DivClassHandIcon";
        this.cascadingStyleSheetsSubClasses.push("DivClassHandIconOff");
        this.cascadingStyleSheetsSubClasses.push("DivClassHandIconOn");  
      break;

      case "multiwayIcon":
      case "brainIcon":
        this.cascadingStyleSheetsSubClass="DivClassHandIcon";
        this.cascadingStyleSheetsSubClasses.push("DivClassHandIconOff");
        this.cascadingStyleSheetsSubClasses.push("DivClassHandIconOn");
      break;

      case "teamworkIcon":
      case "languagesIcon":
      case "leadershipIcon":
      break;

      case "consoleIcon":
        this.cascadingStyleSheetsSubClass="DivClassConsoleIcon";
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOff");
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOn");
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOn1");
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOn2");
      break;
    }
  }
}
