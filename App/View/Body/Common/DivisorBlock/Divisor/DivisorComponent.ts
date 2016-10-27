import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SubDivisorComponent } from './SubDivisor/SubDivisorComponent'

import { Utils } from './../../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class DivisorComponent implements OnInit {
  subDivisors: Array<SubDivisorComponent>;
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {
    this.initialization();
  }

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisor";
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


