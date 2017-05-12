import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelDivisorBlock } from './ModelDivisorBlock';
import { ModelSubDivisor } from './divisor/subDivisor/ModelSubDivisor';
import { ModelDivisor } from './divisor/ModelDivisor';
import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisorBlock implements OnInit {
  @Input() modelDivisorBlock: ModelDivisorBlock;
  @Input() dataModel: Array<any>;
  @Input() subDataModel: Array<any>;

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


