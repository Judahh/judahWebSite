import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelItem } from './ModelItem';
import { ComponentColorEffect } from '../Item/ColorEffect/ComponentColorEffect';

import {HTMLGenerator} from './../../../../Core/HTMLGenerator/HTMLGenerator';

import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentItem implements OnInit{
  @Input() routerLink: string;
  @Input() routerLinkActive: string;
  @Input() modelItem:ModelItem;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }

  cursor(){
    if(this.routerLinkActive=="active"){
      return "cursor: pointer;";
    }else{
      return "";//"pointer-events: none;";
    }
  }

  fontSize(){
    if(this.modelItem.tootip==null||this.modelItem.tootip==undefined||this.modelItem.tootip.fontSize==null||this.modelItem.tootip.fontSize==undefined){
      return "";
    }
    return "font-size: "+this.modelItem.tootip.fontSize+"px ;";
  }

  style(){
    return this.cursor();
  }

  tooltipStyle(){
    return this.fontSize();
  }

}
