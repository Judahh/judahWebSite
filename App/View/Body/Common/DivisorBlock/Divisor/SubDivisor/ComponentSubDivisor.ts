import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelSubDivisor } from './ModelSubDivisor';

import { Utils } from './../../../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentSubDivisor implements OnInit {
  @Input() modelSubDivisor: ModelSubDivisor;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

  position(){
    return "position: absolute;";
  }

  bottom(){
    return "bottom: 0px;";
  }

  style(){
    if(this.modelSubDivisor.toBottom){
      return this.position()+this.bottom();
    }
    return "";
  }

}


