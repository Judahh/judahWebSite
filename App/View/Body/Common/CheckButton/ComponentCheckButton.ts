import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../Item/ModelItem';

import { ModelCheckButton } from './ModelCheckButton';
import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentCheckButton implements OnInit {

  @Input() modelCheckButton: ModelCheckButton;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

}


