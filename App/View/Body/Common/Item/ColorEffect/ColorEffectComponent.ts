import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
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
