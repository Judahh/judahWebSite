import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../Core/Utils/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentInfo implements OnInit{
  @Input() info: string;

  public constructor(){
    this.initialization(); 
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }
}
