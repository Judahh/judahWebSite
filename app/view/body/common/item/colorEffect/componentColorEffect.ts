import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../core/utils/Utils';

import { ModelColorEffect } from './ModelColorEffect';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentColorEffect implements OnInit{
  @Input() modelColorEffect:ModelColorEffect;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }
}
