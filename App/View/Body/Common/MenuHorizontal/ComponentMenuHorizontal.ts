import { Component, Input, OnInit, ViewEncapsulation, ViewChildren, QueryList, forwardRef } from '@angular/core';

import {ComponentItem} from './../item/ComponentItem';
import {HTMLGenerator} from './../../../../core/hTMLGenerator/HTMLGenerator';

import { ModelItem } from './../item/ModelItem';
import { ModelMenuHorizontal } from './ModelMenuHorizontal';
import { ModelMenuItems } from './../ModelMenuItems';
import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

import { Utils } from './../../../../core/utils/Utils';

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