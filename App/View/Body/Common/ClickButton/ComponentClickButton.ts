import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelClickButton } from './ModelClickButton';
import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentClickButton implements OnInit {

  @Input() modelClickButton: ModelClickButton;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

}


