import { Component, Input, OnInit, ViewEncapsulation, ViewChildren, QueryList, forwardRef } from '@angular/core';

import {ComponentItem} from './../item/ComponentItem';
import {hTMLGenerator} from './../../../../core/hTMLGenerator/hTMLGenerator';

import { ModelItem } from './../item/ModelItem';
import { ModelMenuHorizontal } from './ModelMenuHorizontal';
import { ModelMenuItems } from './../ModelMenuItems';
import { ServiceJSON } from './../../../../core/Services/JSON/ServiceJSON';

import { Utils } from './../../../../core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ServiceJSON]
})
export class ComponentMenuHorizontal implements OnInit{
  @Input() modelMenuHorizontal: ModelMenuHorizontal;
  
  constructor(private serviceJSON: ServiceJSON){}

  ngOnInit() {
    this.initialization();  
  }

  private initialization(){
  }
}