import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelComboBox } from './ModelComboBox';
import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentComboBox implements OnInit {

  @Input() modelComboBox: ModelComboBox;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

  fontSize(){
    if(this.modelComboBox.fontSize==undefined||this.modelComboBox.fontSize==null){
      return "";
    }
    return "font-size: "+this.modelComboBox.fontSize+"px;";
  }

  style(){
    return this.fontSize();
  }
}


