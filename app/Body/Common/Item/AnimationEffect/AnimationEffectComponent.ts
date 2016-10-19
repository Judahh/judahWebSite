import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'animationEffect',
  styleUrls: ['AnimationEffectComponent.css'],
  templateUrl: 'AnimationEffectComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class AnimationEffectComponent implements OnInit{
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

      case "consoleIcon":
        this.cascadingStyleSheetsClass="";  
        this.cascadingStyleSheetsSubClass="DivClassConsoleIcon";
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOff");
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOn");
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOn1");
        this.cascadingStyleSheetsSubClasses.push("DivClassConsoleIconOn2");
      break;
    }
  }
}
