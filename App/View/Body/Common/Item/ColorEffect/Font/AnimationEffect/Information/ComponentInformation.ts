import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../../../../Core/Utils/Utils';

import { ModelInformation } from './ModelInformation';


@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentInformation implements OnInit{
  @Input() information: ModelInformation;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }
}
