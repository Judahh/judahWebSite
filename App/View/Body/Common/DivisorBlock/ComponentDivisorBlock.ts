import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../Item/ModelItem';

import { ModelDivisorBlock } from './ModelDivisorBlock';
import { ModelSubDivisor } from './Divisor/SubDivisor/ModelSubDivisor';
import { ModelDivisor } from './Divisor/ModelDivisor';
import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisorBlock implements OnInit {

  @Input() modelDivisorBlock: ModelDivisorBlock;

  ngOnInit() {
    this.initialization();
  }

  display(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined){
      return "";
    }
    if(this.modelDivisorBlock.divisor.display==null||this.modelDivisorBlock.divisor.display==undefined||this.modelDivisorBlock.divisor.display==""){
      return "display: flex;";
    }
    return "display: "+this.modelDivisorBlock.divisor.display+";";
  }

  style(){
    return this.display();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

}


