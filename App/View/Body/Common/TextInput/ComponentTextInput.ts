import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../Item/ModelItem';

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


