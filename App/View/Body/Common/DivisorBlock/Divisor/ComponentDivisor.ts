import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentSubDivisor } from './SubDivisor/ComponentSubDivisor';

import { Utils } from './../../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisor implements OnInit {
  subDivisors: Array<ComponentSubDivisor>;
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisor";
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


