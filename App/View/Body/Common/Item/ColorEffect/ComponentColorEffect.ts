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
export class ComponentColorEffect implements OnInit{
  @Input() modelItem:ModelItem;
  cascadingStyleSheetsClass:string;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
    if(this.modelItem.colorEffect=="neon"){
      this.cascadingStyleSheetsClass="DivClassNeon";
    }
  }
}
