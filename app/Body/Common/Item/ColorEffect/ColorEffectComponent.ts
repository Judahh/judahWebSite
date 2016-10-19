import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'colorEffect',
  styleUrls: ['ColorEffectComponent.css'],
  templateUrl: 'ColorEffectComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class ColorEffectComponent implements OnInit{
  @Input() colorEffect: string;
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() info: string;
  cascadingStyleSheetsClass:string;

  public constructor(){ 
    this.initialization();  
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
    if(this.colorEffect=="neon"){
      this.cascadingStyleSheetsClass="DivClassNeon";
    }
  }
}
