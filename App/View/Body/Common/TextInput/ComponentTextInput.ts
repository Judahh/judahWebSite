import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelTextInput } from './ModelTextInput';
import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentTextInput implements OnInit {

  @Input() modelTextInput: ModelTextInput;
  @Input() list: string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

  fontFamily(){
    if(this.modelTextInput.fontFamily==null||this.modelTextInput.fontFamily==undefined||this.modelTextInput.fontFamily==""){
      return "";
    }
    return "font-family: "+this.modelTextInput.fontFamily+";";
  }

  fontSize(){
    if(this.modelTextInput.fontSize==null||this.modelTextInput.fontSize==undefined){
      return "";
    }
    return "font-size: "+this.modelTextInput.fontSize+"px;";
  }

  style(){
    return this.fontFamily()+this.fontSize();
  }

}


